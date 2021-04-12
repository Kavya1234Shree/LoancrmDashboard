import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
 import { User, Role } from '../../_models';
 import { AuthenticationService } from '../../_services';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
     
     { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
     { path: '/fourwheel-reg', title: 'Add Customer Details',  icon:'person', class: '' },
    { path: '/user-profile', title: 'Pending List',  icon:'person', class: '' },
     { path: '/table-list', title: 'InProcess',  icon:'person', class: '' },
     { path: '/typography', title: 'Declined',  icon:'person', class: '' },
     { path: '/icons', title: 'Approved Cancelled',  icon:'person', class: '' },
     { path: '/maps', title: 'Approved',  icon:'person', class: '' },
     { path: '/notifications', title: 'Disbursed',  icon:'person', class: '' },
     { path: '/rework', title: 'Rework',  icon:'person', class: '' },
     { path: '/recieved', title: 'File Recieved',  icon:'person', class: '' },
     { path: '/returned-login', title: 'Login Returned',  icon:'person', class: '' },
     { path: '/cancel', title: 'Cancel',  icon:'person', class: '' },
     { path: '/owner-reg', title: 'File Owner registration',  icon:'person', class: '' },
     { path: '/owner-list', title: 'File Owner List',  icon:'person', class: '' },
     { path: '/final-dump', title: 'Final Dump List',  icon:'person', class: '' },
     { path: '/advance', title: 'Add Advaced',  icon:'person', class: '' },
     { path: '/advance-list', title: 'Advaced List',  icon:'person', class: '', },
     { path: '/calc-disp', title: 'Calculation',  icon:'person', class: '', },
     { path: '/clear-list', title: 'Cleared Data',  icon:'person', class: '', },
     { path: '/pay-list', title: 'Payed List',  icon:'person', class: '', },
    //  { path: '/extra', title: 'Extra Amounts',  icon:'person', class: '', },
      { path: '/totaldata-list', title: 'Total No.of Datas',  icon:'person', class: '' },
    
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
   currentUser: User;

  constructor(private router: Router,private authenticationService: AuthenticationService
) { 
    //  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  //  get isAdmin() {
  //    return this.currentUser && this.currentUser.role === Role.Admin;
  // }


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
