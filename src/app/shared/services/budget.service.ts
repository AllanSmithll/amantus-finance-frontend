import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  BUDGET_API: string = 'http://localhost:8080/budgets';
  private budgetUpdated = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Budget[]> {
    return this.httpClient.get<Budget[]>(this.BUDGET_API);
  }

  register(budget: Budget): Observable<Budget> {
    return this.httpClient.post<Budget>(this.BUDGET_API, budget);
  }

  remove(budget: Budget): Observable<any> {
    return this.httpClient.delete(`${this.BUDGET_API}/${budget.id}`)
      .pipe(
        tap(() => {
            this.budgetUpdated.next();
        })
      );
  }

  searchById(id: string): Observable<Budget> {
    return this.httpClient.get<Budget>(`${this.BUDGET_API}/${id}`);
  }

  update(budget: Budget): Observable<Budget> {
    return this.httpClient.patch<Budget>(`${this.BUDGET_API}/${budget.id}`, budget);
  }

  onBudgetUpdated(): Observable<void> {
    return this.budgetUpdated.asObservable();
  }

  notifyBudgetUpdated() {
    this.budgetUpdated.next();
  }
}
