import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { ClearDialogComponent } from 'app/clear-dialog/clear-dialog.component';


@Component({
  selector: 'app-clear-list',
  templateUrl: './clear-list.component.html',
  styleUrls: ['./clear-list.component.scss']
})
export class ClearListComponent implements OnInit {
  currentUser: User;
    userFromApi: User;
  clr_info: any;
  userappid: any;
  date: any;
  usercollect: any;
  userbank: any;
  userbar: any;
  userowner: any;
  username: any;
  userphone: any;
  userstatus: any;
  usercomp: any;
  userdisloan: any;
  usertype: any;
  userappr: any;
  userlog: any;
  usermonth: any;
  usercomment: any;

  constructor(private http:HttpClient,public matDialog: MatDialog,private serv: EmployeeService,private userService: UserService,private authenticationService: AuthenticationService) { 
    this.currentUser = this.authenticationService.currentUserValue;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  ngOnInit() {
    let resp1= this.http.get("https://api.team4loans.in/api/cleared/data")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.clr_info= data;
    console.log(this.clr_info);

   
      }  )
      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => { 
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
    const modalDialog = this.matDialog.open(ClearDialogComponent, dialogConfig);
  } 
  refresh() {
    window.location.reload();
  }

  download() {
    let fileName = 'Team4Loancleareddata.csv';
    let columnNames = ["date","Collected Name","Bank Name","Application Number","File owner Id","Application_id","Customer Name","Customer Phone","Status","Company Name","Disbursed Loan Amount","type Of Loan","Approved Amout","Logged Loan Amount","Month of disbursement","Comments"];
    let header = columnNames.join(',');

    let csv = header;
    csv += '\r\n';


    this.http.get("https://api.team4loans.in/api/cleared/data")
    .subscribe((data:any)=>{
      data=this.clr_info
      for(let i=0 ;i < this.clr_info.length; ++i){
  
    this.userappid=this.clr_info[i].app_id;
  this.date=this.clr_info[i].date;
  this.usercollect=this.clr_info[i].collected_name;
  this.userbank=this.clr_info[i].bank_name;
  this.userbar=this.clr_info[i].bar_code
  this.userowner=this.clr_info[i].file_owner_id;
  this.username=this.clr_info[i].customer_name;
  this.userphone=this.clr_info[i].customer_phone;
  this.userstatus=this.clr_info[i].status;
  this.usercomp=this.clr_info[i].company_name;
  this.userdisloan=this.clr_info[i].disbursed_loan_amount;
  this.usertype=this.clr_info[i].type_of_loan;
  this.userappr=this.clr_info[i].approved_amount;
  this.userlog=this.clr_info[i].logged_loan_amount;
 this.usermonth=this.clr_info[i].month_disbursement;
    this.usercomment=this.clr_info[i].comments;

    // console.log("Finalnumber",this.usernumber);
    csv += [[this.date] ,[this.usercollect],[this.userbank],[this.userbar],[this.userowner] ,[this.userappid] ,[this.username] ,[this.userphone] ,[this.userstatus] ,[this.usercomp],[this.userdisloan],[this.usertype],[this.userappr],[this.userlog],[this.usermonth] ,[this.usercomment] ].join(',');
    csv += '\r\n';
    }
      // console.log("DriverData",data);
  

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  })
  }

}
