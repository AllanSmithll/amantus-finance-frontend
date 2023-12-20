import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Budget } from 'src/app/shared/models/budget.model';

@Component({
  selector: 'app-budget-edit-modal',
  templateUrl: './budget-edit-modal.component.html',
  styleUrls: ['./budget-edit-modal.component.sass']
})
export class BudgetEditModalComponent {
  constructor(
    public dialogRef: MatDialogRef<BudgetEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { budget: Budget }
) {}

onNoClick(): void {
  this.dialogRef.close();
}
}
