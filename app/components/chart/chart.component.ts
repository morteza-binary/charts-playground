import {Component, Input, OnChanges} from "@angular/core";
import {Alert, NavController} from 'ionic-angular'

import {WebsocketService} from "../../shared/services/websocket.service";

@Component({
    selector: 'chart',
    templateUrl: 'build/components/chart/chart.component.html'
})
export class ChartComponent implements OnChanges {

    @Input()
    underlying: any;

    chartIq: any;
    chartConfig: any;

    constructor(private _websocket: WebsocketService, private nav: NavController) {
        this.chartConfig = {
            chartType: 'candle',
            crosshairs: true
        }
        //this.initialChart();
    }

    ngOnChanges(changes) {
        if(_.isEmpty(this.chartIq)){
            this.initialChart();
        }

        if(!_.isEmpty(this.underlying)){
            if(!_.isEmpty(changes.underlying.previousValue)){
                this._websocket.send({"forget_all": "candles"}).then((data)=>{
                    this.sendTickRequest();
                });
            } else {
                this.sendTickRequest();
            }
        } 
    }

    initialChart() {
        if(!_.isEmpty(this.chartIq)){
            this.chartIq.destroy();
        }

        this.chartIq = new STXChart(
            {
                container: $$$("#tradeContractChart"),
                layout: {
                    chartType: 'candle',
                    crosshair: true,
                    interval: 'tick'
                },
                preferences: {
                    magnet: true,
                    whitespace: 0
                },
                streamParameters:{"maxWait":2000},
            }
        );
        STXSocial.brandMyChart(this.chartIq, "binary-symbol-logo.svg", [10, -10])
        this.chartIq.chart.endHour=23;  
        this.chartIq.chart.beginHour=0;	 
        this.chartIq.chart.endMinute=59;
        this.chartIq.chart.beginMinute=0;
        this.chartIq.chart.xAxis.timeUnit = STX.MINUTE;
    }

    sendTickRequest() {
        this._websocket.onEvent('tick', (data) => {
            let tick: any = data.tick;
            this.chartIq.streamTrade({last:parseFloat(tick.quote), volume:0}, new Date(tick.epoch * 1000));
        });

        this._websocket.onEvent('ohlc', (data) => {
            let ohlc: any = data.ohlc;
            //this.chartIq.streamTrade({last:parseFloat(ohlc.quote), volume:0}, new Date(tick.epoch * 1000));
            this.chartIq.appendMasterData({
                Date: STX.yyyymmddhhmm(new Date(ohlc.epoch * 1000)),
                Open: parseFloat(ohlc.open),
                High: parseFloat(ohlc.high),
                Low: parseFloat(ohlc.low),
                Close: parseFloat(ohlc.close)
            });
        });

        this._websocket
            .getTickHistory(this.underlying.name, {
                "end": "latest",
                "count": 600,//chartService.getCapacity(),
                "subscribe": 1,
                "granularity": 60,
                "style": "candles"
            })
            .then((data) => {
                var data = this.convertToOHLC2(data.candles);
                this.chartIq.newChart(this.underlying.displayName, data, null, () => {
                    this.chartIq.setPeriodicityV2(1, "minute");
                });

            }, (error) => {
                let alert = Alert.create({
                    title: 'Error!',
                    subTitle: error.error.message + ".<br/> <b>Please change the market.</b>",
                    buttons: ['OK']
                });
                this.nav.present(alert);
            });
    }
    
    convertToOHLC(history: any){
        var times = history.times;
        var prices = history.prices;

        var compare = function compare(a, b) {
            var timea = parseInt(a.time),
                timeb = parseInt(b.time);
            if (timea < timeb) {
                return -1;
            } else if (timea > timeb) {
                return 1;
            } else {
                return 0;
            }
        };
        var historyArray = [];
        times.forEach(function (time, index) {
            historyArray.push({
                DT: time * 1000,
                Close: parseFloat(prices[index])
            });
        });
        times.sort(compare);

        return historyArray
    }

    convertToOHLC2(candles: any){
        var historyArray = [];
        if(candles.length > 0){
            candles.forEach(function(candle, index){
                historyArray.push({
                    DT: candle.epoch * 1000,
                    Close: parseFloat(candle.close),
                    Open: parseFloat(candle.open),
                    Low: parseFloat(candle.low),
                    High: parseFloat(candle.high)
                });
            });
        }

        return historyArray;
    }

    setChartType(_type){
        this.chartIq.setChartType(_type);
    }

    setCrosshairs(_value){
        this.chartConfig.crosshairs = _value;
        this.chartIq.layout.crosshair = _value;
    }
}
