import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtAddComponent } from './debt-add/debt-add.component';
import { DebtEditModalComponent } from './debt-edit-modal/debt-edit-modal.component';
import { DebtListComponent } from './debt-list/debt-list.component';
import { DebtRouterComponent } from './debt-router/debt-router.component';
import {BudgetModule} from "../budget/budget.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MaterialModule} from "../layout/material/material.module";

@NgModule({
  declarations: [
    DebtAddComponent,
    DebtEditModalComponent,
    DebtListComponent,
    DebtRouterComponent
  ],
  imports: [
    CommonModule,
    BudgetModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
    MaterialModule
  ]
})
export class DebtModule { }
