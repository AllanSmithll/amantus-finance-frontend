import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRouterComponent } from './income-router/income.component';
import { IncomeAddComponent } from './income-add/income-add.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeEditModalComponent } from './income-edit-modal/income-edit-modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from "../layout/material/material.module";

@NgModule({
  declarations: [
    IncomeAddComponent,
    IncomeListComponent,
    IncomeRouterComponent,
    IncomeEditModalComponent
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
    IncomeAddComponent,
    IncomeListComponent,
    IncomeEditModalComponent,
    IncomeRouterComponent
  ],
})
export class IncomeModule { }
