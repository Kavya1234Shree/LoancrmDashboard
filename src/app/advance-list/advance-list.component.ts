import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';


@Component({
  selector: 'app-advance-list',
  templateUrl: './advance-list.component.html',
  styleUrls: ['./advance-list.component.scss']
})
export class AdvanceListComponent implements OnInit {

  public drivtwo_info: any;
  totalRec : number;
  page: number = 1;
  loading = false;
    users: User[] = [];
    currentUser: User;
  constructor(private http:HttpClient,public matDialog: MatDialog,private serv: EmployeeService,private userService: UserService,private authenticationService: AuthenticationService) { 
    this.drivtwo_info = new Array<any>();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  

  ngOnInit() {
    let resp1= this.http.get("https://api.team4loans.in/api/adv/list")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.drivtwo_info= data;
    console.log(this.drivtwo_info);
      }  )

      this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

  }
  refresh() {
    window.location.reload();
  }
}