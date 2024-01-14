import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Subject, takeUntil} from "rxjs";
import {Debt} from "../../shared/models/debt.model";
import {DebtService} from "../../shared/services/debt.service";
import {MatDialog} from "@angular/material/dialog";
import {MenssageService} from "../../shared/services/menssage.service";
import {DebtEditModalComponent} from "../debt-edit-modal/debt-edit-modal.component";

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.sass']
})
export class DebtListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'creditor_name', 'value', 'value_pending',
    'type', 'date', 'date_expiration', 'status', 'actions'];
  dataSource = new MatTableDataSource<Debt>();
  private unsubscribe$ = new Subject<void>();

  constructor(
    private debtService: DebtService,
    private dialog: MatDialog,
    private messageService: MenssageService
  ) { }

  ngOnInit(): void {
    this.loadDebtData();
    this.subscribeToDebtUpdates();
  }

  private loadDebtData(): void {
    this.debtService.list().subscribe(
      (data: Debt[]) => {
        this.dataSource.data = data;
      },
      error => {
        this.messageService.showError('Erro ao obter dados de dívidas: ' + error);
      }
    );
  }

  private subscribeToDebtUpdates(): void {
    this.debtService.onDebtUpdated()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.loadDebtData());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(item: Debt): void {
    const dialogRef = this.dialog.open(DebtEditModalComponent, {
      width: '400px',
      data: { debt: { ...item } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.debt) {
        const updatedDebt: any = { ...result.debt };
        this.debtService.update(updatedDebt).subscribe(() => {
          this.debtService.notifyDebtUpdated();
        });
      }
    });
  }

  delete(debt: Debt): void {
    this.messageService.confirm('Tem certeza?', 'Você deseja excluir o orçamento?')
      .then((confirmed) => {
        if (confirmed) {
          this.debtService.remove(debt).subscribe(
            () => {
              this.messageService.showSuccess('Orçamento excluído com sucesso.');
              this.loadDebtData();
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
