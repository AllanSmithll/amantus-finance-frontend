import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from "../../environments/environment";
import {provideFirebaseApp, initializeApp} from "@angular/fire/app";
import {provideFirestore, getFirestore} from "@angular/fire/firestore";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireDatabaseModule
  ]
})
export class FirestoreModule { }
