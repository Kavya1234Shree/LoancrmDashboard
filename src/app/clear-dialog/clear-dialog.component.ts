import { Component, OnInit,Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clear-dialog',
  templateUrl: './clear-dialog.component.html',
  styleUrls: ['./clear-dialog.component.scss']
})
export class ClearDialogComponent implements OnInit {

  date:any;
  collected_name:any;
  login_date:any;
  file_owner_id:any;
  bank_name:any;
  bar_code: any;
  app_id: any;
  customer_name: any;
  customer_phone:any;
  company_name: any;
  logged_loan_amount:any;
  approved_amount:any;
  disbursed_loan_amount:any;
  type_of_loan: any;
  status: any;
  comments:any;
  month_disbursement:any;
  
  user: any;
  accountid: any;
  date1: any;
  login_date1: any;
  month_disbursement1: any;
 


 

  constructor(private http: HttpClient,private router:Router,route :ActivatedRoute,public dialogRef: MatDialogRef<ClearDialogComponent>,@Inject(MAT_DIALOG_DATA) public data) {
    this.bar_code=data;
   }

 accountsss=[
  {id : "Select Bank",  name:"Select Bank"},
   {id :"Bajaj FinServ" ,name:"Bajaj FinServ"},
   {id :"ICICI Bank" ,name:"ICICI Bank"},
   {id :"IDFC Bank" ,name:"IDFC Bank"},
   {id :"HDFC Bank" ,name:"HDFC Bank"},
   {id :"HDFC Golden" ,name:"HDFC Golden"},
   {id :"INDUSIND BANK" ,name:"INDUSIND BANK"},
   {id :"Axis Bank" ,name:"Axis Bank"},
   {id :"YES Bank" ,name:"YES Bank"},
   {id :"Standard" ,name:"Standard"},
   {id :"Fullerton" ,name:"Fullerton"},
   {id :"Kotak Bank" ,name:"Kotak Bank"},
   {id :"Citi Bank" ,name:"Citi Bank"},
   {id :"HDB FINANCE" ,name:"HDB FINANCE"},
   {id :"India Bulls" ,name:"India Bulls"},
   {id :"Tata Capital" ,name:"Tata Capital"},
   {id :"Adity Birla" ,name:"Adity Birla"},
  ]

accountss=[
{id : "BT",  name:"BT"},
{id :"parallel" ,name:"parallel"},
{id :"top up" ,name:"top up"},
{id :"fresh" ,name:"fresh"},
{id :"cobt" ,name:"cobt"},
]


accountssss=[
{id : "OPEN",  name:"OPEN"},
{id :"COVERED" ,name:"COVERED"},
{id :"CONTAINER" ,name:"CONTAINER"}
]

// accountsssss=[
//   {id : "IN PROCESS",  name:"IN PROCESS"},
//   {id :"PENDING" ,name:"PENDING"},
//   {id :"DECLINED" ,name:"DECLINED"},
//   {id :"APPROVED CANCELLED" ,name:"APPROVED CANCELLED"},
//   {id :"APPROVED" ,name:"APPROVED"},
//   {id :"DISBURSED" ,name:"DISBURSED"},
//   {id :"REWORK" ,name:"REWORK"},
//   {id :"FILE RECIEVED" ,name:"FILE RECIEVED"},
//   {id :"LOGIN RETURNED" ,name:"LOGIN RETURNED"}, 
//   {id :"CANCEL" ,name:"CANCEL"}
//   ]



 ngOnInit() {

  let resp1 = this.http.get<any>("https://api.team4loans.in//api/cleared/id?bar_code="+this.bar_code);
  resp1.subscribe((data:any)=>{
  this.user=data;

  this.date=data['date']
  this.date1 = new Date(this.date).toString().slice(0,-39);
  this.collected_name=data['collected_name']
  this.login_date=data['login_date']
  this.login_date1 = new Date(this.login_date).toString().slice(0,-39);
  this.file_owner_id=data['file_owner_id']
  this.bank_name=data['bank_name']
  this.bar_code=data['bar_code']
  this.app_id=data['app_id']
  this.customer_name=data['customer_name']
  this.customer_phone=data['customer_phone']
  this.company_name=data['company_name']
  this.logged_loan_amount=data['logged_loan_amount']
  this.approved_amount=data['approved_amount']
  this.disbursed_loan_amount=data['disbursed_loan_amount']
  this.type_of_loan=data['type_of_loan']
  this.status=data['status']
  this.comments=data['comments']
  this.month_disbursement=data['month_disbursement']
  this.month_disbursement1 ='0' + (new Date(this.month_disbursement).getMonth() + 1).toString() + '-' + new Date(this.month_disbursement).getFullYear().toString();
  




});

let respo = this.http.get<any>("https://api.team4loans.in/api/file_own/ownerid")
    respo.subscribe((data:any)=>{
    this.accountid=data;
  });
  

}
closeModal() {
  this.dialogRef.close();
}

}
