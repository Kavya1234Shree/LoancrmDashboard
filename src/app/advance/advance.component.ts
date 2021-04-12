import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {

  file_owner_id:any;
  advnce_amount:any;
  accountid: any;
  loading = false;
  users: User[] = [];
  currentUser: User;
  constructor(private http: HttpClient,private router:Router,route :ActivatedRoute,private userService: UserService,private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

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
  onDriver(file_owner_id,advnce_amount){
   
    this.file_owner_id=file_owner_id;
    this.advnce_amount=advnce_amount;

    this.http.post('https://api.team4loans.in/api/adv/reg',{file_owner_id:this.file_owner_id,advnce_amount:this.advnce_amount})
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


