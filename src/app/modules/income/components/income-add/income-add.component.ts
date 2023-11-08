import { Income } from './../../../../shared/models/income.model';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-income-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.sass']
})
export class IncomeAddComponent {
  title = 'TELA DE RECEITA';
  receitas: Income[] = [];
  receitaTratamento: Income;
  mensagemErro: string = '';
  mostrarFormularioEdicao: boolean = false;
  exibirListaReceitas: boolean = false;
  numeroDeReceitas: number = 0;
  mostrarErro: boolean = false;
  incomeId: string = '1';
  incomeOrigin: string = '';
  

  constructor() {
    this.receitaTratamento = new Income(
      '',
      '',
      0,
      new Date(),
      '',
      '',
      '',
      ''
    );
  }

  cadastrar(): void {
    
      if (!this.ehIdCadastrado(this.receitaTratamento.id)) {
        this.receitas.push(this.receitaTratamento);
        this.receitaTratamento = new Income('','',0,new Date(),'','','','');
        this.mensagemErro = '';
        this.numeroDeReceitas = this.receitas.length;
        this.limparErro();
      } else {
        this.mensagemErro = `Id ${this.receitaTratamento.id} já cadastrado!`;
        this.exibirErro();
    }
  }

  remover(receitaARemover: Income): void {
    const indxARemover = this.receitas.findIndex(receita =>
      receita.id === receitaARemover.id);

    if (indxARemover >= 0) {
      this.receitas.splice(indxARemover, 1);
    }

    this.numeroDeReceitas = this.receitas.length;
  }

  private ehIdCadastrado(id: string): boolean {
    const receitasRetornados = this.receitas.filter(receita => receita.id === id);
    return receitasRetornados.length > 0;
  }

  editar(income: Income): void {
    this.receitaTratamento = new Income(
      income.id,
      income.description,
      income.value, 
      income.date,
      income.category,
      income.origin, 
      income.frequency || '', 
      income.addInformation || ''
    );
    this.mostrarFormularioEdicao = true;
  }
  
  atualizar(): void {
    const index = this.receitas.findIndex(r => r.id === this.receitaTratamento.id);
  
    if (index !== -1) {
       
    const receitaAtualizada = new Income(
      this.receitaTratamento.id,
      this.receitaTratamento.description,
      this.receitaTratamento.value,
      this.receitaTratamento.date,
      this.receitaTratamento.category,
      this.receitaTratamento.origin,
      this.receitaTratamento.frequency || '',
      this.receitaTratamento.addInformation || ''
    );
      
      this.receitas[index] = this.receitaTratamento ;
  
      this.receitaTratamento = new Income('','',0,new Date(),'','','','');
      this.mostrarFormularioEdicao = false;
    }
  }
  
  listarReceitas() {
    this.exibirListaReceitas = true;
  }

  exibirErro(): void {
    this.mostrarErro = true;
  }

  limparErro(): void {
    this.mostrarErro = false;
    this.mensagemErro = '';
  }

  excluirReceita(income: Income): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: `Você deseja excluir a receita ${income.description}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.remover(income);
        Swal.fire(
          'Excluído!',
          'A receita foi excluída com sucesso.',
          'success'
        );
      }
    });
  }

}
