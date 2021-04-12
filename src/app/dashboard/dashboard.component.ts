import { Router, } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {HttpClient} from '@angular/common/http';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public driver_online: any;
 public driver_offline: any;
 public driver_two: any;
 public driver_four: any;
 public picked_up: any;
 public picking_up: any;
  reworks: any;
  files: any;
  alldata: any;
  logindata: any;
  findis: any;
  loading = false;
    currentUser: User;
    userFromApi: User;
  cancl: any;
  clear: any;

  constructor(private http:HttpClient,private router: Router,private userService: UserService,private authenticationService: AuthenticationService) {
    ////////online//////////
    let resp= this.http.get("https://api.team4loans.in/api/loan_add/pending-count")
    resp.subscribe((data: any)=>{
       console.log(data) ;
 this.driver_online= data.count ;
 console.log(this.driver_online);
      }  )
      ////////offline//////////
      let response= this.http.get("https://api.team4loans.in/api/loan_add/inprocess-count")
     
      response.subscribe((data: any)=>{
         console.log(data) ;
   this.driver_offline= data.count ;
   console.log(this.driver_offline);
        }  )
 ////////two-wheel-registered-driv//////////
        let respons= this.http.get("https://api.team4loans.in/api/loan_add/decline-count")
     
        respons.subscribe((data: any)=>{
           console.log(data) ;
     this.driver_two= data.count ;
     console.log(this.driver_two);
          }  )
////////four-wheel-registered-driv//////////
let respon= this.http.get("https://api.team4loans.in/api/loan_add/appcan-count")
     
respon.subscribe((data: any)=>{
   console.log(data) ;
this.driver_four= data.count ;
console.log(this.driver_four);
  }  )
  ////////order picked up, going to deliver//////////
let respo= this.http.get("https://api.team4loans.in/api/loan_add/app-count")
     
respo.subscribe((data: any)=>{
   console.log(data) ;
this.picked_up= data.count ;
console.log(this.picked_up);
  }  )
   ////////order accepted,going to pick up the oreder//////////
let res= this.http.get("https://api.team4loans.in/api/loan_add/dis-count")
     
res.subscribe((data: any)=>{
   console.log(data) ;
this.picking_up= data.count ;
console.log(this.picking_up);
  }  )

  let ress= this.http.get("https://api.team4loans.in/api/loan_add/rework-count")
     
ress.subscribe((data: any)=>{
   console.log(data) ;
this.reworks= data.count ;
console.log(this.reworks);
  }  )

  let resss= this.http.get("https://api.team4loans.in/api/loan_add/file-count")
     
resss.subscribe((data: any)=>{
   console.log(data) ;
this.files= data.count ;
console.log(this.files);
  }  )

  let resssh= this.http.get("https://api.team4loans.in/api/loan_add/alldata-count")
     
resssh.subscribe((data: any)=>{
   console.log(data) ;
this.alldata= data.count ;
console.log(this.alldata);
  }  )

  
  let ressshs= this.http.get("https://api.team4loans.in/api/loan_add/login-return-count")
     
ressshs.subscribe((data: any)=>{
   console.log(data) ;
this.logindata= data.count ;
console.log(this.logindata);
  }  )
  let ressshss= this.http.get("https://api.team4loans.in/api/loan_add/finaldis-count")
     
ressshss.subscribe((data: any)=>{
   console.log(data) ;
this.findis= data.count ;
console.log(this.findis);
  }  )
  let ressshsst= this.http.get("https://api.team4loans.in/api/loan_add/cancel-count")
     
  ressshsst.subscribe((data: any)=>{
     console.log(data) ;
  this.cancl= data.count ;
  console.log(this.cancl);
    }  )

    let ressshsstt= this.http.get("https://api.team4loans.in/api/cleared/count")
     
  ressshsstt.subscribe((data: any)=>{
     console.log(data) ;
  this.clear= data.count ;
  console.log(this.clear);
    }  )
 
 
  this.currentUser = this.authenticationService.currentUserValue;

   }
   refresh() {
    window.location.reload();
  }
 
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  
  }
  
  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
    });
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

     
 

  }
}
