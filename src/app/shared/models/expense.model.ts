export class Expense {
  public id?: string;
  public description?: string;
  public value?: number;
  public date?: string;
  public category?: string;
  public frequency?: string;
  public add_information?: string;
  public payment_method?: string;

  constructor(id?: string, expense: Expense = {}) {
    (this.id = id),
      (this.description = expense.description),
      (this.value = expense.value),
      (this.date = expense.date),
      (this.category = expense.category),
      (this.frequency = expense.frequency),
      (this.add_information = expense.add_information);
    this.payment_method = expense.payment_method;
  }
}
