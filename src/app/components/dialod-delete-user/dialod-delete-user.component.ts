import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../model/user';


@Component({
  selector: 'app-dialod-delete-user',
  templateUrl: './dialod-delete-user.component.html',
  styleUrls: ['./dialod-delete-user.component.css']
})
export class DialodDeleteUserComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialodDeleteUserComponent>,
               @Inject(MAT_DIALOG_DATA) public data: User){}
                deletingUser = this.data;

  ngOnInit() {
    console.log("deleeting user" + this.deletingUser.id)
  }

  onNoClick(): void {
    this.dialogRef.close();
 }

}
