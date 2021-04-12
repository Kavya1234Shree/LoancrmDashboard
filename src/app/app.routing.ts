import { OfflineDriveComponent } from './offline-drive/offline-drive.component';
import { AcceptedOrderComponent } from './accepted-order/accepted-order.component';
import { PickedOrderComponent } from './picked-order/picked-order.component';
import { FourRegComponent } from './four-reg/four-reg.component';
import { TwoRegComponent } from './two-reg/two-reg.component';
import { OnlineDriveComponent } from './online-drive/online-drive.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
                                                                                                                                       
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';

const routes: Routes =[
  
    //   { path: 'login',        component: LoginComponent },
    // { path: '',   redirectTo: '/login', pathMatch: 'full' },

  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
   
  // }, 
  // { path:'online-drive',  component: OnlineDriveComponent},
  // { path:'offline-drive',  component: OfflineDriveComponent},
  // { path:'two-reg',  component: TwoRegComponent},
  // { path:'four-reg',  component: FourRegComponent},
  // { path:'picked-order',  component: PickedOrderComponent},
  // { path:'accepted-order',  component: AcceptedOrderComponent},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
