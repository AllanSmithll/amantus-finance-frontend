import { Income } from '../../shared/models/income.model';
import { Component } from '@angular/core';
import { IncomeService } from '../../shared/services/income.service';
import { MenssageService } from 'src/app/shared/services/menssage.service';

@Component({
  selector: 'app-income-router-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.sass']
})
export class IncomeAddComponent {
  title = 'TELA DE RECEITA';
  receitaTratamento: Income;
  mensagemErro: string = '';
  mostrarErro: boolean = false;

  constructor(private incomeService: IncomeService, private menssageService: MenssageService) {
    this.receitaTratamento = new Income('', 0, new Date(), '',
        '', '');
  }

  cadastrar(): void {

    this.incomeService.register(this.receitaTratamento).subscribe(
      () => {
        this.menssageService.showSuccess('Receita cadastrada com sucesso!');
      },
      (error) => {
        this.menssageService.showError('Erro ao cadastrar receita!');
        console.error('Erro ao cadastrar receita: ', error);
      }
    )
  }

}
