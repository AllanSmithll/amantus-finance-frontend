import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseRouterComponent } from './expense-router/expense-router.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExpenseEditModalComponent } from './expense-edit-modal/expense-edit-modal.component';
import {MaterialModule} from "../layout/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ExpenseAddComponent,
    ExpenseListComponent,
    ExpenseRouterComponent,
    ExpenseEditModalComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExpenseAddComponent,
    ExpenseListComponent,
    ExpenseRouterComponent,
    ExpenseEditModalComponent
  ]
})
export class ExpenseModule { }
