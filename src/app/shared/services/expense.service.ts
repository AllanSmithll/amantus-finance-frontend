import { Injectable } from '@angular/core';
import {Observable, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Expense} from "../models/expense.model";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  EXPENSE_API: string = 'http://localhost:8080/expenses';
  private expenseUpdated = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.EXPENSE_API);
  }

  register(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(this.EXPENSE_API, expense);
  }

  remove(expense: Expense): Observable<any> {
    return this.httpClient.delete(`${this.EXPENSE_API}/${expense.id}`)
        .pipe(
            tap(() => {
              this.expenseUpdated.next();
            })
        );
  }

  searchById(id: string): Observable<Expense> {
    return this.httpClient.get<Expense>(`${this.EXPENSE_API}/${id}`);
  }

  update(expense: Expense): Observable<Expense> {
    return this.httpClient.patch<Expense>(`${this.EXPENSE_API}/${expense.id}`, expense);
  }

  onExpenseUpdated(): Observable<void> {
    return this.expenseUpdated.asObservable();
  }

  notifyExpenseUpdated() {
    this.expenseUpdated.next();
  }
}
