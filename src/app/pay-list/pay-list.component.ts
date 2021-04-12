import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { PayDialogComponent } from 'app/pay-dialog/pay-dialog.component';


@Component({
  selector: 'app-pay-list',
  templateUrl: './pay-list.component.html',
  styleUrls: ['./pay-list.component.scss']
})
export class PayListComponent implements OnInit {

  public drivtwo_info: any;
  totalRec : number;
  page: number = 1;
  loading = false;
    users: User[] = [];
    currentUser: User;
  userappid: any;
  date: any;
  usercollect: any;
  userbank: any;
  userbar: any;
  userowner: any;
  username: any;
  userphone: any;
  usercomp: any;
  userstatus: any;
  month_disbursement: any;
  month_disbursement1: string;
  userdis: any;
  file_owner_id: any;
  payy: any;
  accountid: any;
 
  constructor(private http:HttpClient,public matDialog: MatDialog,private serv: EmployeeService,private userService: UserService,private authenticationService: AuthenticationService) { 
    this.drivtwo_info = new Array<any>();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  

  ngOnInit() {
    let resp1= this.http.get("https://api.team4loans.in/api/payed/list")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.drivtwo_info= data;
    console.log(this.drivtwo_info);
    })

    let respo = this.http.get<any>("https://api.team4loans.in/api/file_own/ownerid")
    respo.subscribe((data:any)=>{
    this.accountid=data;

    this.month_disbursement=data['month_disbursement']
  this.month_disbursement1 = new Date(this.month_disbursement).toString().slice(0,-39);
      }  )

      this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
      }
  
  // onPay(file_owner_id,date){
  //   this.file_owner_id=file_owner_id;
  // this.date=date;
  //  if(this.file_owner_id == undefined|| this.file_owner_id == ''){
  //    alert("Please Enter File Owner Id")
  //  }
  //  else{
  //   this.http.post("https://api.team4loans.in/api/payed/payed_info",{file_owner_id:this.file_owner_id,date:this.date})
  //   .subscribe((data: any)=>{
  //     console.log(data);
  //     this.payy=data;
   
  //     },(error:HttpErrorResponse)=>{
  //       console.log(error);
   
  //       alert("unable to load");
  //       }); 
   
  // }
  // }

  // openModal(bar_code) {
  //   const dialogConfig = new MatDialogConfig();
  //   // The user can't close the dialog by clicking outside its body
  //   console.log("phone is ",bar_code)
    
   
  //   dialogConfig.disableClose = true;
  //   dialogConfig.disableClose = true;
  //   dialogConfig.id = "modal-component";
  //   dialogConfig.height = "800px";
  //   dialogConfig.width = "1000px";
  //   dialogConfig.data =  bar_code
  //   // https://material.angular.io/components/dialog/overview
  //   const modalDialog = this.matDialog.open(PayDialogComponent, dialogConfig);
  // } 
  refresh() {
    window.location.reload();
  }
  download() {
    let fileName = 'Team4Loanpaylist.csv';
    let columnNames = ["Customer name","File owner Id","Application ID","Bank Name","Logged Loan Amount","Disbursed Loan Amount","Incentive","Advance","Incentive Amount","Final Incentive","Month of Disbursment"];
    let header = columnNames.join(',');

    let csv = header;
    csv += '\r\n';


    this.http.get("https://api.team4loans.in/api/payed/list")
    .subscribe((data:any)=>{
      data=this.drivtwo_info
      for(let i=0 ;i < this.drivtwo_info.length; ++i){
  
    this.userappid=this.drivtwo_info[i].customer_name;
  this.date=this.drivtwo_info[i].file_owner_id;
  this.usercollect=this.drivtwo_info[i].app_id;
  this.userbank=this.drivtwo_info[i].bank_name;
  this.userbar=this.drivtwo_info[i].logged_loan_amount;
  this.userowner=this.drivtwo_info[i].disbursed_loan_amount;
  this.username=this.drivtwo_info[i].incentive;
  this.userphone=this.drivtwo_info[i].advance;
  this.userstatus=this.drivtwo_info[i].incentive_amount;
  this.usercomp=this.drivtwo_info[i].final_incentive;
  this.userdis=this.drivtwo_info[i].month_disbursement;
    // console.log("Finalnumber",this.usernumber);
    csv += [[this.userappid] ,[this.date] ,[this.usercollect],[this.userbank],[this.userbar],[this.userowner] ,[this.username] ,[this.userphone] ,[this.userstatus] ,[this.usercomp], [this.userdis]].join(',');
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
