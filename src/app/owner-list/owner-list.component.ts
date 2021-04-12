import { OwnerDialogComponent } from './../owner-dialog/owner-dialog.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  public drivtwo_info: any;
  totalRec : number;
  page: number = 1;
  loading = false;
    currentUser: User;
    userFromApi: User;
  constructor(private http:HttpClient,public matDialog: MatDialog,private serv: EmployeeService, private userService: UserService,private authenticationService: AuthenticationService) { 
    this.drivtwo_info = new Array<any>();
    this.currentUser = this.authenticationService.currentUserValue;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  

  ngOnInit() {
    let resp1= this.http.get("https://api.team4loans.in/api/file_own/list")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.drivtwo_info= data;
    console.log(this.drivtwo_info);
      }  )
      this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });

  }
  openModal(file_owner_id) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    console.log("phone is ",file_owner_id)
    
   
    dialogConfig.disableClose = true;
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "800px";
    dialogConfig.width = "1000px";
    dialogConfig.data =  file_owner_id
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(OwnerDialogComponent, dialogConfig);
  } 
 

  refresh() {
    window.location.reload();
  }
}
