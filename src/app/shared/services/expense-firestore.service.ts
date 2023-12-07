import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, Subject, from, map } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseFirestoreService {

  private expenseUpdated = new Subject<void>();

  colecaoReceitas: AngularFirestoreCollection<Expense>;
  NOME_COLECAO = 'expenses';

  constructor(private afs: AngularFirestore) {
    this.colecaoReceitas = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Expense[]> {
    return this.colecaoReceitas.valueChanges({idField: 'id'});
  }

  cadastrar(expense: Expense): Observable<DocumentReference<Expense>> {
    delete expense.id;
    return from(this.colecaoReceitas.add({...expense}));
  }

  remover(expense: Expense): Observable<any> {
    return from(this.colecaoReceitas.doc(expense.id).delete());
  }

  pesquisarPorId(id: string): Observable<Expense> {
    return this.colecaoReceitas.doc(id).get().pipe(map(document =>
      new Expense(id, document.data())));
  }

  atualizar(expense: Expense): Observable<void> {
    return from(this.colecaoReceitas.doc(expense.id).update({...expense}));
  }

  onExpenseUpdated(): Observable<void> {
    return this.expenseUpdated.asObservable();
  }

  notifyExpenseUpdated() {
    this.expenseUpdated.next();
  }
}
