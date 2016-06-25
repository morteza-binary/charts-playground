import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';

import {ChartComponent} from '../../components/chart/chart.component';
import {MarketComponent} from '../../components/market/market.component';

@Component({
    templateUrl: 'build/pages/home-page/home-page.html',
    providers: [],
    directives: [ChartComponent, MarketComponent]
})
export class HomePage {
    

    constructor(private _navController: NavController) {
        this.selected = {
            market: null,
            underlying:null
        };
    }

    goToFactsPage(){
        this._navController.push(ScientificFactsPage);
    }

  }
