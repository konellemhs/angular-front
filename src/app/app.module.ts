import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatInputModule, MatTableModule,MatCheckboxModule, MatSortModule, MAT_DIALOG_DATA } from '@angular/material';
import { DialodDeleteUserComponent } from './components/dialod-delete-user/dialod-delete-user.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateFormComponent,
    DialodDeleteUserComponent,
    DialogEditComponent
  ], 
  entryComponents: [
    DialodDeleteUserComponent,
    DialogEditComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule ,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {  provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
