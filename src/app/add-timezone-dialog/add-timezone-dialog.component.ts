
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-timezone-dialog',
  templateUrl: './add-timezone-dialog.component.html',
})
export class AddTimezoneDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddTimezoneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { allTimezones: string[], selectedTimezoneToAdd: string }
  ) {}

  onAddClick() {
    this.dialogRef.close(this.data.selectedTimezoneToAdd);
  }

  onCancelClick() {
  
    this.dialogRef.close();
  }
}
