import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Expense} from "../../shared/models/expense.model";

@Component({
  selector: 'app-expense-edit-modal',
  templateUrl: './expense-edit-modal.component.html',
  styleUrls: ['./expense-edit-modal.component.sass']
})
export class ExpenseEditModalComponent {
  constructor(
      public dialogRef: MatDialogRef<ExpenseEditModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { expense: Expense }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
