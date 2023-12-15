import {Observable, Subject, tap} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Income } from 'src/app/shared/models/income.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  INCOME_API: string = 'http://localhost:8080/incomes';
  private incomeUpdated = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.INCOME_API);
  }

  register(income: Income): Observable<Income> {
    return this.httpClient.post<Income>(this.INCOME_API, income);
  }

  remove(income: Income): Observable<any> {
    return this.httpClient.delete(`${this.INCOME_API}/${income.id}`)
      .pipe(
        tap(() => {
            this.incomeUpdated.next();
        })
      );
  }

  searchById(id: string): Observable<Income> {
    return this.httpClient.get<Income>(`${this.INCOME_API}/${id}`);
  }

  update(income: Income): Observable<Income> {
    return this.httpClient.patch<Income>(`${this.INCOME_API}/${income.id}`, income);
  }

  onIncomeUpdated(): Observable<void> {
    return this.incomeUpdated.asObservable();
  }

  notifyIncomeUpdated() {
    this.incomeUpdated.next();
  }
}
