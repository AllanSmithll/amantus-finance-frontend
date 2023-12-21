import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Budget } from 'src/app/shared/models/budget.model';
import { BudgetService } from 'src/app/shared/services/budget.service';
import { MenssageService } from 'src/app/shared/services/menssage.service';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.sass']
})
export class BudgetAddComponent {
  transientBudget: Budget;
  formulario: FormGroup;

  constructor(private budgetService: BudgetService,
    private menssageService: MenssageService,
    private fb: FormBuilder) {
    this.transientBudget  = {} as Budget;
    this.formulario = this.fb.group({
      description: ['', Validators.required],
      value_total: [null, [Validators.required, Validators.min(0)]],
      value_missing: [null, [Validators.required, Validators.min(0)]],
      date_creation: [null, Validators.required],
      date_expiration: [null, Validators.required],
      type: ['', Validators.required]
    });
  }

  create(): void {
    if(this.formulario.valid) {
      this.budgetService.register(this.transientBudget).subscribe(
          () => {
            this.menssageService.showSuccess('Orçamento cadastrado com sucesso!');
          },
          (error) => {
            this.menssageService.showError('Erro ao cadastrar orçamento!');
            console.error('Erro ao cadastrar orçamento: ', error);
          }
      )
    } else {
      this.menssageService.showError('Erro ao cadastrar orçamento! Verifique os campos obrigatórios');
    }
  }
}
