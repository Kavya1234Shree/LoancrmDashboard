import { Router } from '@angular/router';
import { NotyDialogComponent } from './../noty-dialog/noty-dialog.component';
import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';
import { User,Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public app_rvd: any;
  totalRec : number;
  page: number = 1;
  loading = false;
  currentUser: User;
  userFromApi: User;
  isVisible : boolean = false;
  editable :false;
  bar_code: any;
  bank_name: any;
  customer_name: any;
  disbursed_loan_amount: any;
  month_disbursement: any;
 

  constructor(private http:HttpClient,private router:Router,public matDialog: MatDialog,private userService: UserService,private authenticationService: AuthenticationService) { 
     ////////online driver info//////////
     this.app_rvd = new Array<any>();
     this.currentUser = this.authenticationService.currentUserValue;

  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  ngOnInit() {
    let resp1= this.http.get("https://api.team4loans.in/api/loan_add/dis")
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
  onDump(bar_code,bank_name,customer_name,disbursed_loan_amount,month_disbursement){

    this.bar_code=bar_code;
    this.bank_name=bank_name;
    this.customer_name=customer_name;
    this.disbursed_loan_amount=disbursed_loan_amount;
    this.month_disbursement=month_disbursement;

    console.log('bbbbbbbbbb',this.bar_code);
    console.log('bbbbbbbbbb',this.bank_name);
    console.log('bbbbbbbbbb',this.customer_name);
    console.log('bbbbbbbbbb',this.month_disbursement);

    this.http.post('https://api.team4loans.in/api/loan_add/final-update-edit',{bar_code: this.bar_code,bank_name:this.bank_name,customer_name:this.customer_name,disbursed_loan_amount:this.disbursed_loan_amount,month_disbursement:this.month_disbursement})
    .subscribe((data:any)=>{
        
      console.log('daaaataaa',data);
  
      alert('successfully Dumped');
  
      this.router.navigate(['/notifications']);
  
     },(error:HttpErrorResponse)=>{
       console.log(error);
  
       alert("unable to update");
       });
      
      }
  
  editDomain(driver: any){
    driver.editable = !driver.editable;
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
    const modalDialog = this.matDialog.open(NotyDialogComponent, dialogConfig);
  } 
  refresh() {
    window.location.reload();
  }

 
}
