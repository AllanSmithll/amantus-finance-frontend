import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Debt} from "../../shared/models/debt.model";

@Component({
  selector: 'app-debt-edit-modal',
  templateUrl: './debt-edit-modal.component.html',
  styleUrls: ['./debt-edit-modal.component.sass']
})
export class DebtEditModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DebtEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { debt: Debt }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
