import {Transaction} from "./transaction.model";
import { v4 as uuidv4 } from 'uuid';

export class Income extends Transaction {
    constructor(
      id: string,
      description: string,
      value: number,
      date: Date,
      category: string,
      frequency: string,
      public origin: string,
      user_id: string,
      add_information: string
    ) {
        super(id, description, value, date, category, frequency, user_id, add_information);
    }
}
