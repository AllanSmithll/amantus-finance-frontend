import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/shared/models/income.model';
import { IncomeService } from '../../services/income.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.sass']
})
export class IncomeListComponent implements OnInit {
  displayedColumns: string[] = ['description', 'value', 'date', 'category', 'origin', 'frequency', 'actions'];
  dataSource = new MatTableDataSource<Income>();

  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
      this.incomeService.list().subscribe(
        (data: Income[]) => {
          this.dataSource.data = data;
        },
        error => {
          console.log('Erro ao obter dados de receitas:', error);
        }
      )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editarItem(item: any): void {
    console.log('Editar item:', item);
  }
  
  delete(incomeARemover: Income) {
    this.incomeService.remove(incomeARemover).subscribe(() => {
        
      }
    )
  }

  excluir(income: Income): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: `Você deseja excluir a receita?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(income);
        Swal.fire(
          'Excluído!',
          'A receita foi excluída com sucesso.',
          'success'
        );
      }
    });
  }

}
