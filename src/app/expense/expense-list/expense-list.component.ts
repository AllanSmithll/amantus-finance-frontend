import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Subject, takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {MenssageService} from "../../shared/services/menssage.service";
import {Expense} from "../../shared/models/expense.model";
import {ExpenseEditModalComponent} from "../expense-edit-modal/expense-edit-modal.component";
import { ExpenseFirestoreService } from 'src/app/shared/services/expense-firestore.service';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.sass']
})

export class ExpenseListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'description', 'value', 'date', 'category', 'frequency', 'payment_method', 'actions'];
    dataSource = new MatTableDataSource<Expense>();
    private unsubscribe$ = new Subject<void>();

    constructor(private expenseFirestoreService: ExpenseFirestoreService, private dialog: MatDialog,
                private messageService: MenssageService) {
    }

    ngOnInit(): void {
        this.loadExpenseData();
        this.subscribeToExpenseUpdates();
    }

    private loadExpenseData(): void {
        this.expenseFirestoreService.list().subscribe(
            (data: Expense[]) => {
                this.dataSource.data = data;
            },
            error => {
                this.messageService.showError('Erro ao obter dados de de:' + error);
            }
        );
    }

    private subscribeToExpenseUpdates(): void {
        this.expenseFirestoreService.onExpenseUpdated()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => this.loadExpenseData());
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    editItem(item: Expense): void {
        const dialogRef = this.dialog.open(ExpenseEditModalComponent, {
            width: '400px',
            data: {expense: {...item}}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.expense) {
                const updatedExpense: any = { ...result.expense };
                this.expenseFirestoreService.update(updatedExpense).subscribe(() => {
                    this.expenseFirestoreService.notifyExpenseUpdated();
                });
            }
        });
    }

    delete(expense: Expense): void {
        this.messageService.confirm('Tem certeza?', 'Você deseja excluir a despesa?')
            .then((confirmed) => {
                if (confirmed) {
                    this.expenseFirestoreService.remove(expense).subscribe(
                        () => {
                            this.messageService.showSuccess('Despesa excluída com sucesso.');
                            this.loadExpenseData();
                        },
                        (error) => {
                            this.messageService.showError('Erro ao excluir a despesa.');
                            console.error(error);
                        }
                    )
                }
            })
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
