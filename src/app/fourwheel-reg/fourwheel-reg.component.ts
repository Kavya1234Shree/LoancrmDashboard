import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-fourwheel-reg',
  templateUrl: './fourwheel-reg.component.html',
  styleUrls: ['./fourwheel-reg.component.scss']
})
export class FourwheelRegComponent implements OnInit {

 
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
   
   month_disbursement:any;
   accountid: any;
  comments: any;
  loading = false;
    currentUser: User;
    userFromApi: User;


  

   constructor(private http: HttpClient,private router:Router,route :ActivatedRoute, private userService: UserService,private authenticationService: AuthenticationService) { 
    this.currentUser = this.authenticationService.currentUserValue;
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

accountsssss=[
   {id : "IN PROCESS",  name:"IN PROCESS"},
   {id :"PENDING" ,name:"PENDING"},
   {id :"DECLINED" ,name:"DECLINED"},
   {id :"APPROVED CANCELLED" ,name:"APPROVED CANCELLED"},
   {id :"APPROVED" ,name:"APPROVED"},
   {id :"DISBURSED" ,name:"DISBURSED"},
   {id :"REWORK" ,name:"REWORK"},
   {id :"FILE RECIEVED" ,name:"FILE RECIEVED"},
   {id :"LOGIN RETURNED" ,name:"LOGIN RETURNED"},
   {id :"CANCEL" ,name:"CANCEL"}
   ]



  ngOnInit() {

   let respo = this.http.get<any>("https://api.team4loans.in/api/file_own/ownerid")
    respo.subscribe((data:any)=>{
    this.accountid=data;
  });

  this.loading = true;
  this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
  });
  }
  onDriver(date,collected_name,login_date,file_owner_id,bank_name,bar_code,app_id,customer_name,customer_phone,company_name,logged_loan_amount,approved_amount,disbursed_loan_amount,type_of_loan,status,comments,month_disbursement){

    if(this.bar_code==" " || this.bar_code ==undefined){
         
      alert("Please Enter Application Number"); 
    }
    else{
     
   this.date=date;
   this.collected_name=collected_name;
   this.login_date=login_date;
  this.file_owner_id=file_owner_id;
   this.bank_name=bank_name;
   this.bar_code=bar_code;
   this.app_id=app_id;
   this.customer_name=customer_name;
   this.customer_phone=customer_phone;
   this.company_name=company_name;
   this.logged_loan_amount=logged_loan_amount;
   this.approved_amount=approved_amount;
   this.disbursed_loan_amount=disbursed_loan_amount;
   this.type_of_loan=type_of_loan;
   this.status=status;
   this.comments=comments;
   this.month_disbursement=month_disbursement;
   
  this.http.post('https://api.team4loans.in/api/loan_add/edit',{date: this.date,collected_name:this.collected_name,login_date:this.login_date,file_owner_id:this.file_owner_id,bank_name:this.bank_name,bar_code:this.bar_code,app_id:this.app_id,customer_name:this.customer_name,customer_phone:this.customer_phone,company_name:this.company_name,logged_loan_amount:this.logged_loan_amount,approved_amount:this.approved_amount,disbursed_loan_amount:this.disbursed_loan_amount,type_of_loan:this.type_of_loan,status:this.status,comments:this.comments,month_disbursement:this.month_disbursement})
   .subscribe((data:any)=>{
      
     console.log('daaaataaa',data);
 
     alert("successfully updated");
 
     this.router.navigate(['/dashboard']);
 
    },(error:HttpErrorResponse)=>{
      console.log(error);
 
      alert("unable to update");
      });
    }
   }
}
                     
                 


