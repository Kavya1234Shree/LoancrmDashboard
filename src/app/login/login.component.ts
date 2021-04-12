import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Username: string ='';
  password: string = '';
  loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    loginForm: FormGroup;

  constructor( private http: HttpClient ,private router :Router,private route: ActivatedRoute, private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) { 

      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
    }
  msg="";
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}
}
//   onLogin(Username,password){
//     this.Username=Username;
//     this.password=password;

//     this.http.post('https://api.team4loans.in/api/login',{Username:this.Username,password:this.password})
//     .subscribe((data:any)=>{
//     //  console.log(data);
//      alert("Login Successfully and welcome to Team4");
//      var username =this.Username
// var pwsd=this.password

// localStorage.setItem('username',username)

    //  localStorage.setItem()
    //   this.router.navigate(['/dashboard']);
    //  },(error:HttpErrorResponse)=>{
    //   alert("Unable to Register..please provide valid username and password");
    // });

