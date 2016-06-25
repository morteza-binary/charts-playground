import {Component, Input} from '@angular/core';
import * as _ from "lodash";

import {Market} from './market.model.ts';
import {Submarket} from './submarket.model';
import {Underlying} from './underlying.model';
import {MarketService} from './market.service';

@Component({
    selector: "market",
    templateUrl: 'build/components/market/market.component.html',
    providers: [MarketService]
})
export class MarketComponent {

    markets: Array<Market>;

    @Input()
    selected: any;

    marketsList: any;
    underlyings: Array<Underlying>;
    underlying: string;

    constructor(private _marketSevice: MarketService){
        this.selected = {
            market: null,
            subMarket:null,
            underlying: null
        };

        this.marketsList = [];
        this.underlyings = new Array<Underlying>();

        this.getMarkets();
    }

    getMarkets() {
        this._marketSevice
        .getMarkets()
        .then((data) => {
            this.markets = data;
            this.getMarketsList();
            this.selected.market = 'Volatility Indices';
            this.getUnderlyings(this.selected.market);
        });
    }

    changeMarket(_market){
        this.selected.market = _market;
        this.getUnderlyings(_market);
    }

    getMarketsList(){
        _.forEach(this.markets, (value, key) => {
            this.marketsList.push({name: value.name, isSub: false});
            _.forEach(value.submarkets, (value, key) =>  {
                this.marketsList.push({name: value.name, isSub: true});
            });
        });
    }

    getUnderlyings(_market){
        let underlyings: Array<Underlying> = new Array<Underlying>();

        _.forEach(this.markets, (value, key) => {
            if(value.name == _market){
                _.forEach(value.submarkets, (value, key) => {
                    underlyings = _.concat(underlyings, value.underlyings);
                });
                return false;
            } else {
                _.forEach(value.submarkets, (value, key) => {
                    if(value.name == _market){
                        underlyings = _.concat(underlyings, value.underlyings)
                        return false;
                    }
                });
            }
        });

        this.underlyings = underlyings;
        this.selected.underlying = this.underlyings[0];
        this.underlying = this.underlyings[0].name;
    }

    changeUnderlying(_underlying) {
        this.underlying = _underlying;
        this.selected.underlying = _.find(this.underlyings, ['name', this.underlying]);
    }
}
