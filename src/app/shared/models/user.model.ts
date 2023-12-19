import { Expense } from "./expense.model";
import { Income } from "./income.model";

export interface User {
  id?: string;
  email: string;
  password: string;
  name: string;
  birthdate: Date;
  listIncomes: Income[];
  listExpenses: Expense[];
}