import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';


@Component({
  selector: 'app-owner-reg',
  templateUrl: './owner-reg.component.html',
  styleUrls: ['./owner-reg.component.scss']
})
export class OwnerRegComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;
  file_owner_id:any;
    fileowner_name:any;
    fileowner_email:any;
    fileowner_phone:any;
    bankname:any;
    IFSC:any;
    account_num:any;
    type_of_account:any;
  contact: { bankname1: any;
            bankname2:any;
            bankname3:any;
            bankname4:any;
            bankname5:any;
            bankname6:any;
            bankname7:any;
            bankname8:any;
            bankname9:any;
            bankname10:any;
            bankname11:any;
            bankname12:any;
            bankname13:any;
            bankname14:any;
            bankname15:any;
            bankname16:any;
          };
            incentives1:number;
            incentives2:number;
            incentives3:number;
            incentives4:number;
            incentives5:number;
            incentives6:number;
            incentives7:number;
            incentives8:number;
            incentives9:number;
            incentives10:number;
            incentives11:number;
            incentives12:number;
            incentives13:number;
            incentives14:number;
            incentives15:number;
            incentives16:number;
           
  bankname1: any;
  bankname2: any;
  bankname3: any;
  bankname4: any;
  bankname5: any;
  bankname6: any;
  bankname7: any;
  bankname8: any;
  bankname9: any;
  bankname10: any;
  bankname11: any;
  bankname12: any;
  bankname13: any;
  bankname14: any;
  bankname15: any;
  bankname16: any;
 
            

            

   

  constructor(private http: HttpClient,private router:Router,route :ActivatedRoute,private userService: UserService,private authenticationService: AuthenticationService) { 
    this.currentUser = this.authenticationService.currentUserValue;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
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
   {id :"Adity Birla" ,name:"Adity Birla"}
    ]
 
    accountss=[
      {id : "Savings",  name:"Savings"},
      {id :"Current" ,name:"Current"},
    ]

  ngOnInit() {
    this.contact = { bankname1:"Bajaj FinServ",bankname2:"ICICI Bank",bankname3:"IDFC Bank",bankname4:"HDFC Bank",
    bankname5:"HDFC Golden",bankname6:"INDUSIND BANK",bankname7:"Axis Bank",bankname8:"YES Bank",bankname9:"Standard",
    bankname10:"Fullerton",bankname11:"Kotak Bank",bankname12:"Citi Bank",bankname13:"HDB FINANCE",bankname14:"India Bulls",
    bankname15:"Tata Capital",bankname16:"Adity Birla"};

    this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
  }
  onDriver(file_owner_id,fileowner_name,fileowner_email,fileowner_phone,bankname,IFSC,account_num,type_of_account,bankname1,bankname2,bankname3,bankname4,bankname5,bankname6,bankname7,bankname8,bankname9,bankname10,bankname11,bankname12,bankname13,bankname14,bankname15,bankname16,bankname17,incentives1,incentives2,incentives3,incentives4,incentives5,incentives6,incentives7,incentives8,incentives9,incentives10,incentives11,incentives12,incentives13,incentives14,incentives15,incentives16,incentives17){
  this.file_owner_id=file_owner_id;
  this.fileowner_name=fileowner_name;
  this.fileowner_email=fileowner_email;
  this.fileowner_phone=fileowner_phone;
  this.bankname=bankname;
  this.IFSC=IFSC;
  this.account_num=account_num;
  this.type_of_account=type_of_account;
   this.bankname1=bankname1;
  this.bankname2=bankname2;
  this.bankname3=bankname3;
  this.bankname4=bankname4;
  this.bankname5=bankname5;
  this.bankname6=bankname6;
  this.bankname7=bankname7;
  this.bankname8=bankname8;
  this.bankname9=bankname9;
  this.bankname10=bankname10;
  this.bankname11=bankname11;
  this.bankname12=bankname12;
  this.bankname13=bankname13;
  this.bankname14=bankname14;
  this.bankname15=bankname15;
  this.bankname16=bankname16;
 
  
  this.incentives1=incentives1;
  this.incentives2=incentives2;
  this.incentives3=incentives3;
  this.incentives4=incentives4;
  this.incentives5=incentives5;
  this.incentives6=incentives6;
  this.incentives7=incentives7;
  this.incentives8=incentives8;
  this.incentives9=incentives9;
  this.incentives10=incentives10;
  this.incentives11=incentives11;
  this.incentives12=incentives12;
  this.incentives13=incentives13;
  this.incentives14=incentives14;
  this.incentives15=incentives15;
  this.incentives16=incentives16;
  


  this.http.post('https://api.team4loans.in/api/file_own/reg',{file_owner_id:this.file_owner_id,fileowner_name:this.fileowner_name,fileowner_email:this.fileowner_email,fileowner_phone:this.fileowner_phone,bankname:this.bankname,IFSC:this.IFSC,account_num:this.account_num,type_of_account:this.type_of_account,bankname1:this.contact.bankname1,bankname2:this.contact.bankname2,bankname3:this.contact.bankname3,bankname4:this.contact.bankname4,bankname5:this.contact.bankname5,bankname6:this.contact.bankname6,bankname7:this.contact.bankname7,bankname8:this.contact.bankname8,bankname9:this.contact.bankname9,bankname10:this.contact.bankname10,bankname11:this.contact.bankname11,bankname12:this.contact.bankname12,bankname13:this.contact.bankname13,bankname14:this.contact.bankname14,bankname15:this.contact.bankname15,bankname16:this.contact.bankname16,incentives1:this.incentives1,incentives2:this.incentives2,incentives3:this.incentives3,incentives4:this.incentives4,incentives5:this.incentives5,incentives6:this.incentives6,incentives7:this.incentives7,incentives8:this.incentives8,incentives9:this.incentives9,incentives10:this.incentives10,incentives11:this.incentives11,incentives12:this.incentives12,incentives13:this.incentives13,incentives14:this.incentives14,incentives15:this.incentives15,incentives16:this.incentives16})
   .subscribe((data:any)=>{
      
     console.log('daaaataaa',data);
 
     alert('successfully updated');
 
     this.router.navigate(['/dashboard']);
 
    },(error:HttpErrorResponse)=>{
      console.log(error);
 
      alert("unable to update");
      });

   }

  }

