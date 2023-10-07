import {Transaction} from "./transaction.model";

export class Income extends Transaction {
    readonly _origin: string = "";
    constructor(
        id: string,
        description: string,
        value: number,
        date: Date,
        category: string,
        origin: string,
        frequency: string,
        add_information: string
    ) {
        super(id, description, value, date, category, frequency, add_information);
        this._origin = origin;
    }

    get origin(): string {
        return this._origin;
    }
}
