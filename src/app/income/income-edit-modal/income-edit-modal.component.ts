import {Component, Inject, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Income } from 'src/app/shared/models/income.model';

@Component({
  selector: 'app-income-router-edit-modal',
  templateUrl: './income-edit-modal.component.html',
  styleUrls: ['./income-edit-modal.component.sass']
})
export class IncomeEditModalComponent {
  constructor(
    public dialogRef: MatDialogRef<IncomeEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { income: Income }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
