import {Submarket} from "./submarket.model"

export class Market{
    name: string;
    displayName: string;
    submarkets: Array<Submarket>;

        constructor(){
            this.name = null;
            this.displayName = null;
            this.submarkets= new Array<Submarket>();
        }
}
