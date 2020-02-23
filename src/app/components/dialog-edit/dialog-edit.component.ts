import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../model/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  editingUser: User;


  constructor(public dialogRef: MatDialogRef<DialogEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.editingUser = new User();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}