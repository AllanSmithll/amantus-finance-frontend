import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import {Debt} from "../models/debt.model";

@Injectable({
  providedIn: 'root'
})
export class DebtService {
  DEBT_API: string = 'http://localhost:8080/debts';
  private debtUpdated = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Debt[]> {
    return this.httpClient.get<Debt[]>(this.DEBT_API);
  }

  register(debt: Debt): Observable<Debt> {
    return this.httpClient.post<Debt>(this.DEBT_API, debt);
  }

  remove(debt: Debt): Observable<any> {
    return this.httpClient.delete(`${this.DEBT_API}/${debt.id}`)
      .pipe(
        tap(() => {
          this.debtUpdated.next();
        })
      );
  }

  searchById(id: string): Observable<Debt> {
    return this.httpClient.get<Debt>(`${this.DEBT_API}/${id}`);
  }

  update(debt: Debt): Observable<Debt> {
    return this.httpClient.patch<Debt>(`${this.DEBT_API}/${debt.id}`, debt);
  }

  onDebtUpdated(): Observable<void> {
    return this.debtUpdated.asObservable();
  }

  notifyDebtUpdated() {
    this.debtUpdated.next();
  }
}
