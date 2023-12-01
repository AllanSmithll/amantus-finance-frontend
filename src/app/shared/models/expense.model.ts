import {Transaction} from "./transaction.model";
import {v4 as uuidv4} from "uuid";

export class Expense extends Transaction {
    _payment_method: string = "";

    constructor(
        description: string,
        value: number,
        date: Date,
        category: string,
        frequency: string,
        payment_method: string,
        add_information: string
    ) {
        super(uuidv4(), description, value, date, category, frequency, add_information);
        this._payment_method = payment_method;
    }

    get paymentMethod(): string {
        return this._payment_method;
    }

    set paymentMethod(payment_method: string) {
        this._payment_method = payment_method;
    }
}
