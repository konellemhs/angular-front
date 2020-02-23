import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { User } from '../../model/user';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

user: User = {  id:null,
                name:null,
                phone:null,
                email:null};

  constructor(private apiService: ApiService,public dialog: MatDialog) { }

  createUser(){
    const dialogAddingNewUser = this.dialog.open(DialogEditComponent,{
      width:'400px',
      data : null
    });

    dialogAddingNewUser.afterClosed().subscribe((result : User)=>
    {
        this.apiService.createUser(result).subscribe((user: User)=>{
          console.log("User created, ", result);
        });
    }) 
  }

  ngOnInit() {
  }

}
