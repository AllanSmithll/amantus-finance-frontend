import { Injectable } from '@angular/core';
import {from, map, Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from "@angular/fire/compat/firestore";
import { Income } from '../models/income.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeFirestoreService {

  incomeCollection: AngularFirestoreCollection<Income>;
  NAME_COLLECTION = 'incomes';

  constructor(private afs: AngularFirestore) {
    this.incomeCollection = afs.collection(this.NAME_COLLECTION);
  }

  list(): Observable<Income[]> {
    return this.incomeCollection.valueChanges({idField: 'id'});
  }

  register(income: Income): Observable<Income> {
    return from(this.incomeCollection.add(income)).pipe(
      map((documentRef: DocumentReference<Income>) => {
        return { ...income, id: documentRef.id };
      })
    );
  }

  remove(income: Income): Observable<any> {
    return from(this.incomeCollection.doc(income.id).delete());
  }

  update(income: Income): Observable<void> {
    return from(this.incomeCollection.doc(income.id).update({...income}));
  }

  onIncomeUpdated(): Observable<void> {
    return this.onIncomeUpdated();
  }

  notifyIncomeUpdated() {
    this.onIncomeUpdated();
  }
}
