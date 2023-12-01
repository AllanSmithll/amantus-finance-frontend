import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Subject, takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {MenssageService} from "../../shared/services/menssage.service";
import {ExpenseService} from "../../shared/services/expense.service";
import {Expense} from "../../shared/models/expense.model";
import {ExpenseEditModalComponent} from "../expense-edit-modal/expense-edit-modal.component";

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.sass']
})

export class ExpenseListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'description', 'value', 'date', 'category', 'frequency', 'payment_method', 'actions'];
    dataSource = new MatTableDataSource<Expense>();
    private unsubscribe$ = new Subject<void>();

    constructor(private expenseService: ExpenseService, private dialog: MatDialog,
                private messageService: MenssageService) {
    }

    ngOnInit(): void {
        this.loadExpenseData();
        this.subscribeToExpenseUpdates();
    }

    private loadExpenseData(): void {
        this.expenseService.list().subscribe(
            (data: Expense[]) => {
                this.dataSource.data = data;
            },
            error => {
                this.messageService.showError('Erro ao obter dados de de:' + error);
            }
        );
    }

    private subscribeToExpenseUpdates(): void {
        this.expenseService.onExpenseUpdated()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => this.loadExpenseData());
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    editItem(item: Expense): void {
        const mappedExpense: any = {
            id: item.id,
            description: item.description,
            value: item.value,
            date: item.date,
            category: item.category,
            frequency: item.frequency,
            origin: item.paymentMethod,
            addInformation: item.addInformation,
            userId: item.userId,
        };

        const dialogRef = this.dialog.open(ExpenseEditModalComponent, {
            width: '400px',
            data: {expense: {...mappedExpense}}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.income) {
                const updatedIncome: any = {
                    id: result.expense.id,
                    _description: result.expense.description,
                    _value: result.expense.value,
                    _date: result.expense.date,
                    _category: result.expense.category,
                    _frequency: result.expense.frequency,
                    _origin: result.expense.origin,
                    _add_information: result.expense.addInformation,
                    _userId: result.expense.userId,
                };
                this.expenseService.update(updatedIncome).subscribe(() => {
                    this.expenseService.notifyExpenseUpdated();
                });
            }
        });
    }


    delete(expense: Expense): void {
        this.messageService.confirm('Tem certeza?', 'Você deseja excluir a despesa?')
            .then((confirmed) => {
                if (confirmed) {
                    this.expenseService.remove(expense).subscribe(
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
