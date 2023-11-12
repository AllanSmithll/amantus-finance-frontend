import { Income } from './../../../../shared/models/income.model';
import { Component } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.sass']
})
export class IncomeAddComponent {
  title = 'TELA DE RECEITA';
  receitaTratamento: Income;
  mensagemErro: string = '';
  mostrarErro: boolean = false;

  constructor(private incomeService: IncomeService, private router: Router) {
    this.receitaTratamento = new Income('', 0, new Date(), '', '', '');
  }

  cadastrar(): void {
    
    this.incomeService.register(this.receitaTratamento).subscribe(
      () => {
        alert('Receita cadastrada com sucesso!');
        // this.router.navigate(['/incomeList']);
      },
      error => {
        console.error('Erro ao cadastrar receita: ', error);
        alert('Erro ao cadastrar receita. Por favor, tente novamente');
      }
    )
  }

}
