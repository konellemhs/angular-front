import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {DataSource} from '@angular/cdk/collections';
import { DialodDeleteUserComponent } from '../dialod-delete-user/dialod-delete-user.component';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private apiService: ApiService,public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }
 
  users:  User[];
  selectedUser:  User = {id:null,
                        name:null,
                        phone:null,
                        email:null};
  
  dataSource = new MatTableDataSource<User>();

  displayedColumns = ['name', 'phone', 'email','actions'];

  refreshTheTable(){
    
    this.ngOnInit();
    
  }
  
  deleteUser(user: User){

    const dialogdeletingUser = this.dialog.open(DialodDeleteUserComponent,{
      width:'400px',
      data : user,
     
    });
    
    dialogdeletingUser.afterClosed().subscribe((results: User)=>
    {
        console.log("deleting student: " +  results.name + results.id);
        this.apiService.deleteUser(results.id).subscribe(
          k => {
            this.apiService.getUsers().subscribe(
              data => this.users = data);
            this.refreshTheTable();
         })
      
    }
    )
  }

  applyNameFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data:
      {name: string}, filterValue: string) =>
      data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
}
 

  applyPhoneFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data:
      {phone: string}, filterValue: string) =>
      data.phone.trim().toLowerCase().indexOf(filterValue) !== -1;
  }

  applyEmailFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data:
      {email: string}, filterValue: string) =>
      data.email.trim().toLowerCase().indexOf(filterValue) !== -1;
  }

  ngOnInit() {
    
    this.apiService.getUsers().subscribe((users: User[])=>{
      this.dataSource.data = users;
      this.users = users;
      console.log(this.users);
    })
    
  }

}

