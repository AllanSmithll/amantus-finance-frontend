import {Transaction} from "./transaction.model";
import { v4 as uuidv4 } from 'uuid';

export class Income extends Transaction {
    private _origin: string = "";

    constructor(
        description: string,
        value: number,
        date: Date,
        category: string,
        frequency: string,
        addInformation: string,
    ) {
        super(uuidv4(), description, value, date, category, frequency, addInformation);
    }

    get origin(): string {
        return this._origin;
    }

    set origin(origin: string) {
        this._origin = origin;
    }
}
