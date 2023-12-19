import { Component } from '@angular/core';
import {MenssageService} from "../../shared/services/menssage.service";
import {Expense} from "../../shared/models/expense.model";
import {ExpenseService} from "../../shared/services/expense.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.sass']
})
export class ExpenseAddComponent {
  transientExpense: Expense;
  formulario: FormGroup;

  constructor(private expenseService: ExpenseService,
    private menssageService: MenssageService,
    private fb: FormBuilder) {
    this.transientExpense  = {} as Expense;
    this.formulario = this.fb.group({
      description: ['', Validators.required],
      value: [null, [Validators.required, Validators.min(0)]],
      date: [null, Validators.required],
      category: ['', Validators.required],
      frequency: ['', Validators.required],
      payment_method: ['', Validators.required],
      add_information: ['']
    });
  }

  create(): void {
    if(this.formulario.valid) {
      this.expenseService.register(this.transientExpense).subscribe(
          () => {
            this.menssageService.showSuccess('Despesa cadastrada com sucesso!');
          },
          (error) => {
            this.menssageService.showError('Erro ao cadastrar despesa!');
            console.error('Erro ao cadastrar despesa: ', error);
          }
      )
    } else {
      this.menssageService.showError('Erro ao cadastrar receita! Verifique os campos obrigatórios');
    }
  }
}
