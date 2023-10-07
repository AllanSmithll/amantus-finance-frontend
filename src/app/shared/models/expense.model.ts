import {Transaction} from "./transaction.model";

export class Expense extends Transaction {
    readonly _payment_method: string = "";

    constructor(
        id: string,
        description: string,
        value: number,
        date: Date,
        category: string,
        frequency: string,
        payment_method: string,
        add_information: string
    ) {
        super(id, description, value, date, category, frequency, add_information);
        this._payment_method = payment_method;
    }

    get payment_method(): string {
      return this._payment_method;
    }
}
