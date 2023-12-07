import { Component } from '@angular/core';
import {MenssageService} from "../../shared/services/menssage.service";
import {Expense} from "../../shared/models/expense.model";
import {ExpenseService} from "../../shared/services/expense.service";
import { ExpenseFirestoreService } from 'src/app/shared/services/expense-firestore.service';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.sass']
})
export class ExpenseAddComponent {
  transientExpense: Expense;

  constructor(private expenseFirestoreService: ExpenseFirestoreService, private menssageService: MenssageService) {
    this.transientExpense = new Expense('');
  }

  create(): void {
    this.expenseFirestoreService.cadastrar(this.transientExpense).subscribe(
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
