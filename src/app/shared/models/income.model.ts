import {Transaction} from "./transaction.model";
import { v4 as uuidv4 } from 'uuid';

export class Income extends Transaction {
    constructor(
      description: string,
      value: number,
      date: Date,
      category: string,
      frequency: string,
      public origin: string,
      transaction_code: string,
      user_id: string,
      add_information: string
    ) {
        super(uuidv4(), description, value, date, category, frequency, user_id, add_information);
    }
}
