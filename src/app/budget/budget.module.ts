import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetAddComponent } from './budget-add/budget-add.component';
import { BudgetEditModalComponent } from './budget-edit-modal/budget-edit-modal.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetRouterComponent } from './budget-router/budget-router.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../layout/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    BudgetAddComponent,
    BudgetEditModalComponent,
    BudgetListComponent,
    BudgetRouterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    BudgetAddComponent,
    BudgetEditModalComponent,
    BudgetListComponent,
    BudgetRouterComponent
  ]
})
export class BudgetModule { }
