import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Income } from 'src/app/shared/models/income.model';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  INCOME_API = 'http://localhost:3000/incomes';

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  list(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.INCOME_API);
  }

  register(income: Income): Observable<Income> {
    return this.httpClient.post<Income>(this.INCOME_API, income);
  }

  remove(income: Income): Observable<any> {
    return this.httpClient.delete(`${this.INCOME_API}/${income.id}`)
  }

  searchById(id: string): Observable<Income> {
    return this.httpClient.get<Income>(`${this.INCOME_API}/${id}`);
  }

  update(income: Income): Observable<Income> {
    return this.httpClient.put<Income>(`${this.INCOME_API}/${income.id}`, income);
  }

}
