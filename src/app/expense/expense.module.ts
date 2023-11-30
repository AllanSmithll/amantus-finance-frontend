import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseRouterComponent } from './expense-router/expense-router.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExpenseEditModalComponent } from './expense-edit-modal/expense-edit-modal.component';


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
    RouterModule
  ],
  exports: [
    ExpenseAddComponent,
    ExpenseListComponent,
    ExpenseRouterComponent,
    ExpenseEditModalComponent
  ]
})
export class ExpenseModule { }
