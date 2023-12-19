import { Transaction } from "./transaction.model";

export interface Expense extends Transaction {
  payment_method: string;
}