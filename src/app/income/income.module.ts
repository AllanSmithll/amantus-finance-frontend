import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRouterComponent } from './income-router/income.component';
import { IncomeAddComponent } from './income-add/income-add.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeEditModalComponent } from './income-edit-modal/income-edit-modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    RouterOutlet,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    IncomeAddComponent,
    IncomeListComponent,
    IncomeEditModalComponent,
    IncomeRouterComponent
  ],
})
export class IncomeModule { }
