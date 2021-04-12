import { UserService,AuthenticationService } from '../_services';
import { TableDialogComponent } from './../table-dialog/table-dialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';

import { User,Role } from '../_models';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public online_info: any;
  public driver_info: any;
  totalRec : number;
  page: number = 1;
  loading = false;
    currentUser: User;
    userFromApi: User;
   constructor(private http:HttpClient,public matDialog: MatDialog,private serv: EmployeeService,private userService: UserService,private authenticationService: AuthenticationService) { 
      ////////online driver info//////////
      this.online_info = new Array<any>();
      this.currentUser = this.authenticationService.currentUserValue;
   }
   get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
   ngOnInit() {
     let resp1= this.http.get("https://api.team4loans.in/api/loan_add/inprocess")
 resp1.subscribe((data: any)=>{
   console.log(data);
 this.online_info= data;
 console.log(this.online_info);
   }  )
   this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
   
   }
   openModal(bar_code) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    console.log("phone is ",bar_code)
    
   
    dialogConfig.disableClose = true;
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "1000px";
    dialogConfig.data =  bar_code
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(TableDialogComponent, dialogConfig);
  } 
  refresh() {
    window.location.reload();
  }

}
