import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Income } from '../models/income.model';
import { Observable, Subject, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeFirestoreService {
  private incomeUpdated = new Subject<void>();

  colecaoReceitas: AngularFirestoreCollection<Income>;
  NOME_COLECAO = 'incomes';

  constructor(private afs: AngularFirestore) {
    this.colecaoReceitas = afs.collection(this.NOME_COLECAO);
  }

  list(): Observable<Income[]> {
    return this.colecaoReceitas.valueChanges({idField: 'id'});
  }

  register(income: Income): Observable<DocumentReference<Income>> {
    delete income.id;
    return from(this.colecaoReceitas.add({...income}));
  }

  remove(income: Income): Observable<any> {
    return from(this.colecaoReceitas.doc(income.id).delete());
  }

  searchById(id: string): Observable<Income> {
    return this.colecaoReceitas.doc(id).get().pipe(map(document =>
      new Income(id, document.data())));
  }

  update(income: Income): Observable<void> {
    const id = income.id;
    delete income.id;
    return from(this.colecaoReceitas.doc(id).update({...income}));
  }

  onIncomeUpdated(): Observable<void> {
    return this.incomeUpdated.asObservable();
  }

  notifyIncomeUpdated() {
    this.incomeUpdated.next();
  }
}
