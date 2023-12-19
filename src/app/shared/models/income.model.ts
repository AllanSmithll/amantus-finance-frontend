import { Transaction } from "./transaction.model";

export interface Income extends Transaction {
  origin: string;
}