import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {  RouterModule,Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { data } from 'jquery';

@Component({
  selector: 'app-calc-disp',
  templateUrl: './calc-disp.component.html',
  styleUrls: ['./calc-disp.component.scss']
})
export class CalcDispComponent implements OnInit {
  file_owner_id:string='';
  loading = false;
    users: User[] = [];
    currentUser: User;
  accountid: any;
  total_amount: any;
  advance: any;
  sum:any;
  totl: any;
  
  public popoverTitle: string = 'cancel';
  public popoverMessage: string = 'Are you sure want Clear this Dump record?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  n: any;
  final_value: string;
  final_val: any;
  advns: any;
  clr: any;
  amount: any;
  comment: any;
  extra_amount: any;
 
  constructor(private http: HttpClient ,private router :Router,private userService: UserService,private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }
   get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  advn="";
  ngOnInit() {
    let respo = this.http.get<any>("https://api.team4loans.in/api/file_own/ownerid")
    respo.subscribe((data:any)=>{
    this.accountid=data;
  });
    this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
  }
  onEnter(file_owner_id){
    this.file_owner_id=file_owner_id;
     
    let resp=this.http.get("https://api.team4loans.in/api/loan_add/finalcal?file_owner_id="+this.file_owner_id)
    resp.subscribe((data: any)=>{
      console.log(data);
    this.advn= data;
    this.n=data.length;
    console.log('fiiiiii',data.length)
    console.log('nnnnnn',this.n)

    if(this.n==data.length){
      this.final_val=data[this.n -1].final
      this.advns=data[this.n - 1].adv
      console.log("final   :",this.final_val,this.advns)
      
    }
    
    console.log(this.advn);
      }  )
   
}


onDispl(file_owner_id,total_amount,advance,comment){
  this.file_owner_id=file_owner_id;
 this.total_amount=total_amount;
 this.advance=advance;
 this.comment=comment;
 if(this.file_owner_id == undefined|| this.file_owner_id == ''){
   alert("Please Enter File Owner Id")
 }
 else{
  this.http.post("https://api.team4loans.in/api/loan_add/cal-total",{file_owner_id:this.file_owner_id,total_amount:this.total_amount,advance:this.advance,comment:this.comment})
  .subscribe((data: any)=>{
    console.log(data);
    this.totl=data.sum;
  alert("Calculated");
    },(error:HttpErrorResponse)=>{
      console.log(error);
 
      alert("unable to calculate");
      }); 
 
}
}
clearData(file_owner_id){
  this.file_owner_id=file_owner_id;

  let resp=this.http.get("https://api.team4loans.in/api/loan_add/remove-dumplist?file_owner_id="+this.file_owner_id)
  resp.subscribe((data: any)=>{
    console.log(data);
    this.clr=data;
    alert("Cleared");
  
    }  )
 


}
// addData(file_owner_id,extra_amount,comment){
//   this.file_owner_id=file_owner_id;
//  this.extra_amount=extra_amount;
 
//   this.http.post("https://api.team4loans.in/api/adv/comment",{file_owner_id:this.file_owner_id,extra_amount:this.extra_amount,comment:this.comment})
//   .subscribe((data: any)=>{
//     console.log(data);
 
//     alert("Updated");
  
//     },(error:HttpErrorResponse)=>{
//       console.log(error);
 
//       alert("unable to Update");
//       });   
 


// }
}
