import {Underlying} from "./underlying.model";

export class Submarket {
    name: string;
    displayName: string;
    underlyings: Array<Underlying> = new Array<Underlying>();
}
