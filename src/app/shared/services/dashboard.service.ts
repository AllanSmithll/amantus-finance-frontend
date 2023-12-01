import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of } from 'rxjs';
import { DashboardData } from '../models/dashboard-data.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    const incomeData$ = this.http.get<number[]>(`${this.apiUrl}/incomes`).pipe(
      map((incomes) => {
        // Lógica de transformação dos dados, se necessário
        return incomes;
      })
    );

    const expenseData$ = this.http.get<number[]>(`${this.apiUrl}/expenses`).pipe(
      map((expenses) => {
        // Lógica de transformação dos dados, se necessário
        return expenses;
      })
    );

    return forkJoin([incomeData$, expenseData$]).pipe(
      map(([incomeData, expenseData]) => {
        return {
          incomeData,
          expenseData,
        } as DashboardData;
      })
    );
  }

  getBalance(): Observable<number> {
    return forkJoin([this.getIncomeTotal(), this.getExpenseTotal()]).pipe(
      map(([incomeTotal, expenseTotal]) => {
        return incomeTotal - expenseTotal;
      })
    );
  }

  private getIncomeTotal(): Observable<number> {
    return this.http.get<number[]>(`${this.apiUrl}/incomes`).pipe(
      map((incomes) => {
        // Lógica para calcular o total de receitas
        return incomes.reduce((total, income) => total + income, 0);
      })
    );
  }

  private getExpenseTotal(): Observable<number> {
    return this.http.get<number[]>(`${this.apiUrl}/expenses`).pipe(
      map((expenses) => {
        // Lógica para calcular o total de despesas
        return expenses.reduce((total, expense) => total + expense, 0);
      })
    );
  }
}
