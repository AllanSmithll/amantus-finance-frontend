import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { Budget } from 'src/app/shared/models/budget.model';
import { BudgetService } from 'src/app/shared/services/budget.service';
import { MenssageService } from 'src/app/shared/services/menssage.service';
import { BudgetEditModalComponent } from '../budget-edit-modal/budget-edit-modal.component';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.sass']
})
export class BudgetListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'description', 'value_total', 'value_missing',
    'date_creation', 'date_expiration', 'type', 'actions'];
  dataSource = new MatTableDataSource<Budget>();
  private unsubscribe$ = new Subject<void>();

  constructor(
    private budgetService: BudgetService,
    private dialog: MatDialog,
    private messageService: MenssageService
  ) { }

  ngOnInit(): void {
    this.loadBudgetData();
    this.subscribeToBudgetUpdates();
  }

  private loadBudgetData(): void {
    this.budgetService.list().subscribe(
      (data: Budget[]) => {
        this.dataSource.data = data;
      },
      error => {
        this.messageService.showError('Erro ao obter dados de orçamentos: ' + error);
      }
    );
  }

  private subscribeToBudgetUpdates(): void {
    this.budgetService.onBudgetUpdated()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.loadBudgetData());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(item: Budget): void {
    const dialogRef = this.dialog.open(BudgetEditModalComponent, {
      width: '400px',
      data: { budget: { ...item } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.budget) {
        const updatedBudget: any = { ...result.budget };
        this.budgetService.update(updatedBudget).subscribe(() => {
          this.budgetService.notifyBudgetUpdated();
        });
      }
    });
  }

  delete(budget: Budget): void {
    this.messageService.confirm('Tem certeza?', 'Você deseja excluir o orçamento?')
      .then((confirmed) => {
        if (confirmed) {
          this.budgetService.remove(budget).subscribe(
            () => {
              this.messageService.showSuccess('Orçamento excluído com sucesso.');
              this.loadBudgetData();
            },
            (error) => {
              this.messageService.showError('Erro ao excluir o orçamento.');
              console.error(error);
            }
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
