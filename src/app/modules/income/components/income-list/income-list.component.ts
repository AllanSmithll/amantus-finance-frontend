import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/shared/models/income.model';
import { IncomeService } from '../../services/income.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {Subject, takeUntil} from "rxjs";
import {IncomeEditModalComponent} from "../income-edit-modal/income-edit-modal.component";

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.sass']
})
export class IncomeListComponent implements OnInit {
  displayedColumns: string[] = ['id','description', 'value', 'date', 'category', 'origin', 'frequency', 'actions'];
  dataSource = new MatTableDataSource<Income>();
  private unsubscribe$ = new Subject<void>();

  constructor(private incomeService: IncomeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadIncomeData();
    this.subscribeToIncomeUpdates();
  }

  private loadIncomeData(): void {
    this.incomeService.list().subscribe(
      (data: Income[]) => {
        this.dataSource.data = data;
      },
      error => {
        console.log('Erro ao obter dados de receitas:', error);
      }
    );
  }

  private subscribeToIncomeUpdates(): void {
      this.incomeService.onIncomeUpdated()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(() => this.loadIncomeData());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editarItem(item: Income): void {

    const mappedIncome: any = {
      id: item.id,
      description: item._description,
      value: item._value,
      date: item._date,
      category: item._category,
      frequency: item._frequency,
      origin: item._origin,
      addInformation: item._add_information,
      userId: item._userId,
    };

    const dialogRef = this.dialog.open(IncomeEditModalComponent, {
      width: '400px',
      data: { income: { ...mappedIncome } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.income) {
        const updatedIncome: any = {
          id: result.income.id,
          _description: result.income.description,
          _value: result.income.value,
          _date: result.income.date,
          _category: result.income.category,
          _frequency: result.income.frequency,
          _origin: result.income.origin,
          _add_information: result.income.addInformation,
          _userId: result.income.userId,
        };
        this.incomeService.update(updatedIncome).subscribe(() => {
          this.incomeService.notifyIncomeUpdated();
        });
      }
    });
  }

  delete(incomeARemover: Income) {
    this.incomeService.remove(incomeARemover).subscribe((): void => {
      this.loadIncomeData()
      }
    )
  }

  deleteIncome(income: Income): void {
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
