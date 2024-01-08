import { Income } from '../../shared/models/income.model';
import {Component, OnInit} from '@angular/core';
import { IncomeService } from '../../shared/services/income.service';
import { MenssageService } from 'src/app/shared/services/menssage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from "../../shared/services/authentication.service";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-income-router-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.sass']
})
export class IncomeAddComponent implements OnInit {
  title = 'TELA DE RECEITA';
  transientIncome: Income;
  formulario: FormGroup;
  user: any = {};

  constructor(
    private incomeService: IncomeService,
    private menssageService: MenssageService,
    private authService: AuthenticationService,
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

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (user) => {
        this.user = user;
        this.transientIncome.user_id = this.user.id;
      });
  }

  register(): void {
    if(this.formulario.valid) {
      this.transientIncome.id = 0;
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
