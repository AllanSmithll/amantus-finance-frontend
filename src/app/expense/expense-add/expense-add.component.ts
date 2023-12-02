import { Component } from '@angular/core';
import {MenssageService} from "../../shared/services/menssage.service";
import {Expense} from "../../shared/models/expense.model";
import {ExpenseService} from "../../shared/services/expense.service";

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.sass']
})
export class ExpenseAddComponent {
  transientExpense: Expense;

  constructor(private expenseService: ExpenseService, private menssageService: MenssageService) {
    this.transientExpense = new Expense('', '', 0, new Date(), '',
        '', '', '', '');
  }

  create(): void {
    this.expenseService.register(this.transientExpense).subscribe(
        () => {
          this.menssageService.showSuccess('Despesa cadastrada com sucesso!');
        },
        (error) => {
          this.menssageService.showError('Erro ao cadastrar despesa!');
          console.error('Erro ao cadastrar despesa: ', error);
        }
    )
  }
}
