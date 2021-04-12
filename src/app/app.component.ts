import { User, Role } from './_models';

import { AuthenticationService } from './_services';
import { Component} from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


  constructor(
    
) {
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

// get isAdmin() {
//   return this.currentUser && this.currentUser.role === Role.Admin;
// }


}
