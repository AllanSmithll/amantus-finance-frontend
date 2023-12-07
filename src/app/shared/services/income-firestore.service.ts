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

  listar(): Observable<Income[]> {
    return this.colecaoReceitas.valueChanges({idField: 'id'});
  }

  cadastrar(income: Income): Observable<DocumentReference<Income>> {
    delete income.id;
    return from(this.colecaoReceitas.add({...income}));
  }

  remover(income: Income): Observable<any> {
    return from(this.colecaoReceitas.doc(income.id).delete());
  }

  pesquisarPorId(id: string): Observable<Income> {
    return this.colecaoReceitas.doc(id).get().pipe(map(document =>
      new Income(id, document.data())));
  }

  atualizar(income: Income): Observable<void> {
    return from(this.colecaoReceitas.doc(income.id).update({...income}));
  }

  onIncomeUpdated(): Observable<void> {
    return this.incomeUpdated.asObservable();
  }

  notifyIncomeUpdated() {
    this.incomeUpdated.next();
  }

}
