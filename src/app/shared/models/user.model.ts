import { Expense } from "./expense.model";
import { Income } from "./income.model";

export class User {
  public id?: string;
  private _email: string;
  private _password: string;
  private _name: string;
  private _birthdate: Date;
  private _listIncomes: Array<Income>;
  private _listExpenses: Array<Expense>;

  constructor(
    email: string,
    password: string,
    name: string,
    birthdate: Date
  ) {
    this._email = email;
    this._password = password;
    this._name = name;
    this._birthdate = birthdate;
    this._listIncomes = Array<Income>();
    this._listExpenses = Array<Expense>();
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set birthdate(birthdate: Date) {
    this._birthdate = birthdate;
  }

  get sumIncomes(): number {
    return this._listIncomes.reduce((sum, income) => sum + income.value!, 0);
  }

  get sumExpenses(): number {
    return this._listExpenses.reduce((sum, expense) => sum + expense.value!, 0);
  }  

  get quantIncomes(): number {
    return this._listIncomes.length;
  }

  get quantExpenses(): number {
    return this._listExpenses.length;
  }
}
