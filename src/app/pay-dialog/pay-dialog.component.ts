import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {  RouterModule,Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { first } from 'rxjs/operators';



@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.scss']
})
export class PayDialogComponent implements OnInit {
  file_owner_id: any;
  date: any;

  payy="";
  accountid: any;


  constructor(private http: HttpClient,private router :Router,public dialogRef: MatDialogRef<PayDialogComponent>,@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    let respo = this.http.get<any>("https://api.team4loans.in/api/file_own/ownerid")
    respo.subscribe((data:any)=>{
    this.accountid=data;
    this.file_owner_id=data['file_owner_id']

  });
  }
  onPay(file_owner_id,date){
    this.file_owner_id=file_owner_id;
  this.date=date;
   if(this.file_owner_id == undefined|| this.file_owner_id == ''){
     alert("Please Enter File Owner Id")
   }
   else{
    this.http.post("https://api.team4loans.in/api/payed/payed_info",{file_owner_id:this.file_owner_id,date:this.date})
    .subscribe((data: any)=>{
      console.log(data);
      this.payy=data;
   
      },(error:HttpErrorResponse)=>{
        console.log(error);
   
        alert("unable to load");
        }); 
   
  }
  }

}
