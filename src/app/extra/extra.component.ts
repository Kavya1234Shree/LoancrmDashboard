
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {EmployeeService} from '../app.service';
import { first } from 'rxjs/operators';

import { User, Role } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {
  public drivtwo_info: any;
  totalRec : number;
  page: number = 1;
  loading = false;
    users: User[] = [];
    currentUser: User;
  date: any;
  date1: string;

  constructor(private http:HttpClient,public matDialog: MatDialog,private serv: EmployeeService,private userService: UserService,private authenticationService: AuthenticationService) { 
    this.drivtwo_info = new Array<any>();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  ngOnInit() {
    let resp1= this.http.get("https://api.team4loans.in/api/comment/list")
    resp1.subscribe((data: any)=>{
      console.log(data);
    this.drivtwo_info= data;
    console.log(this.drivtwo_info);

    this.date=data['date']
  this.date1 = new Date(this.date).toString().slice(0,-39);

    
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
