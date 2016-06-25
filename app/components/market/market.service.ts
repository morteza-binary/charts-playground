import {Injectable} from '@angular/core';
import * as _ from "lodash";

import {Market} from './market.model';
import {Submarket} from './submarket.model';
import {Underlying} from './underlying.model';
import {WebsocketService} from '../../shared/services/websocket.service';

@Injectable()
export class MarketService {

    public markets: Array<Market>;

    constructor(private _websocketService: WebsocketService){
        this._websocketService = _websocketService;
        this.markets = [];
    }

    getMarkets(){
        return this._websocketService
            .getActiveSymbols()
            .then((response) => {
                let symbols = _.groupBy(response.active_symbols, 'market_display_name');

                _.forEach(symbols, (value, key) => {
                    let market: Market = new Market();
                    var subMarkets = _.groupBy(value, 'submarket_display_name');
                    market.name = key;

                    _.forEach(subMarkets, (value, key) => {
                        let submarket: Submarket = new Submarket();
                        let underlying: Underlying = new Underlying();

                        submarket.name = key;

                        _.forEach(value, (value, key) => {
                            let underlying: Underlying = new Underlying();

                            underlying.name = value["symbol"];
                            underlying.displayName = value["display_name"];
                            submarket.underlyings.push(underlying);
                        });

                        market.submarkets.push(submarket);
                    });
                    this.markets.push(market);
                });

                return new Promise((resolve, reject) =>resolve(this.markets));
            });
    }
}
