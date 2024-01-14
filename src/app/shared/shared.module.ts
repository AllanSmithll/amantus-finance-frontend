import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtTypePipe } from './pipes/debt-type.pipe';
import { DebtStatusPipe } from './pipes/debt-status.pipe';

@NgModule({
  declarations: [
    DebtTypePipe,
    DebtStatusPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DebtTypePipe,
    DebtStatusPipe
  ]
})
export class SharedModule { }
