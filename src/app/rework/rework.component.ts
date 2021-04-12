import { ReworkDialogComponent } from './../rework-dialog/rework-dialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';

import { User,Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';



@Component({
  selector: 'app-rework',
  templateUrl: './rework.component.html',
  styleUrls: ['./rework.component.scss']
})
export class ReworkComponent implements OnInit {

  public app_rvd: any;
  totalRec : number;
page: number = 1;
loading = false;
    currentUser: User;
    userFromApi: User;

  constructor(private http:HttpClient,public matDialog: MatDialog,private serv: EmployeeService,private userService: UserService,private authenticationService: AuthenticationService) { 
     ////////online driver info//////////
     this.app_rvd = new Array<any>();
     this.currentUser = this.authenticationService.currentUserValue;
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  ngOnInit() {
    let resp1= this.http.get("https://api.team4loans.in/api/loan_add/rework")
resp1.subscribe((data: any)=>{
  console.log(data);
this.app_rvd= data;
console.log(this.app_rvd);
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
      const modalDialog = this.matDialog.open(ReworkDialogComponent, dialogConfig);
    } 
    refresh() {
      window.location.reload();
    }

}
