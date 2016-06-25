import {Injectable} from "@angular/core";


@Injectable ()
    export class WebsocketService {

        constructor(){
            this.api = new LiveApi();
        }

        getUrl(){
            return "binary.com"
        }

        ping(){
            return this.api.ping();
        }

        getActiveSymbols(){
            return this.api.getActiveSymbolsBrief();
        }

        getAssetIndex(){
            return this.api.getAssetIndex();
        }

        getTickHistory(symbol:string, options:any){
            return this.api.getTickHistory(symbol, options);
        }

        unsubscribeFromTick(symbol){
            return this.api.unsubscribeFromTick(symbol);
        }

        unsubscribeFromAllTicks(){
            return this.api.unsubscribeFromAllTicks();
        }

        sendRaw(data){
            return this.api.sendRaw(data);
        }

        send(data){
            return this.api.send(data);
        }

        onEvent(name: string, callback){
            this.api.events.on(name, callback);
        }
    }
