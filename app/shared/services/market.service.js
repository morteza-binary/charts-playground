import {Injectable} from '@angular/core';

import {MarketModel} from '../models/market.model';
import {Submarket} from '../models/submarket.model';
import {Underlying} from '../models/underlying.model';
import {WebsocketService} from './websocket.service';

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
                let market: Market = new Market();

                this.symbols = _.groupBy(response.active_symbols, 'market_display_name');

                _.forEach(this.symbols, (value, key) => {
                    var subMarkets = _.groupBy(value, 'submarket_display_name');
                    market.name = key;
                    
                    _.forEach(subMarkets, (value, key) => {
                        market.submarkets.push({
                            name: key
                        });
                    });
                    this.markets.push(market);
                });
                
                return new Promise((resolve, reject) =>resolve(this.markets));
            });
    }
}

