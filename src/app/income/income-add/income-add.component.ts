import { Income } from '../../shared/models/income.model';
import { Component } from '@angular/core';
import { IncomeService } from '../../shared/services/income.service';
import { MenssageService } from 'src/app/shared/services/menssage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-income-router-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.sass']
})
export class IncomeAddComponent {
  title = 'TELA DE RECEITA';
  transientIncome: Income;
  formulario: FormGroup;

  constructor(
    private incomeService: IncomeService, 
    private menssageService: MenssageService,
    private fb: FormBuilder) {
    this.transientIncome = {} as Income;
    this.formulario = this.fb.group({
      description: ['', Validators.required],
      value: [null, [Validators.required, Validators.min(0)]],
      date: [null, Validators.required],
      category: ['', Validators.required],
      frequency: ['', Validators.required],
      origin: ['', Validators.required],
      add_information: ['']
    });
  }

  cadastrar(): void {
    if(this.formulario.valid) {
      this.incomeService.register(this.transientIncome).subscribe(
        () => {
          this.menssageService.showSuccess('Receita cadastrada com sucesso!');
        },
        (error) => {
          this.menssageService.showError('Erro ao cadastrar receita!');
          console.error('Erro ao cadastrar receita: ', error);
        }
      );
    } else {
      this.menssageService.showError('Erro ao cadastrar receita! Verifique os campos obrigatórios');
    }
  }
}