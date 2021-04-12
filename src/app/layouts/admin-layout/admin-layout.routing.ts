import { ExtraComponent } from './../../extra/extra.component';
import { PayListComponent } from './../../pay-list/pay-list.component';
import { ClearListComponent } from './../../clear-list/clear-list.component';
import { CalcDispComponent } from './../../calc-disp/calc-disp.component';
import { CancelComponent } from './../../cancel/cancel.component';

import { AuthGuard } from './../../_helpers/auth.guard';
import { AdvanceListComponent } from './../../advance-list/advance-list.component';
import { AdvanceComponent } from './../../advance/advance.component';
import { FinalDumpComponent } from './../../final-dump/final-dump.component';
import { ReturnedLoginComponent } from './../../returned-login/returned-login.component';
import { TotaldataListComponent } from './../../totaldata-list/totaldata-list.component';
import { OwnerRegComponent } from './../../owner-reg/owner-reg.component';
import { OwnerListComponent } from './../../owner-list/owner-list.component';
import { RecievedComponent } from './../../recieved/recieved.component';
import { ReworkComponent } from './../../rework/rework.component';




import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { FourwheelRegComponent } from './../../fourwheel-reg/fourwheel-reg.component';

import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';
import { Role } from 'app/_models/role';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // { path: 'login',        component: LoginComponent },
    // { path: '',   redirectTo: '/login', pathMatch: 'full' },
     { path: 'login',      component: LoginComponent}, 
         
     { path: '',      component: DashboardComponent ,canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent,canActivate: [AuthGuard] },
    { path: 'table-list',     component: TableListComponent,canActivate: [AuthGuard] },
    { path: 'typography',     component: TypographyComponent,canActivate: [AuthGuard] },
    { path: 'icons',          component: IconsComponent,canActivate: [AuthGuard] },
    { path: 'maps',           component: MapsComponent,canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent ,canActivate: [AuthGuard]},
    { path: 'fourwheel-reg',  component: FourwheelRegComponent ,canActivate: [AuthGuard]},
    { path: 'rework',  component: ReworkComponent ,canActivate: [AuthGuard]},
    { path: 'recieved',  component: RecievedComponent,canActivate: [AuthGuard] },
    { path: 'owner-list',  component: OwnerListComponent,canActivate: [AuthGuard] },
    { path: 'owner-reg',  component: OwnerRegComponent,canActivate: [AuthGuard] },
    { path: 'totaldata-list',  component: TotaldataListComponent ,canActivate: [AuthGuard]},
    { path: 'returned-login',  component: ReturnedLoginComponent ,canActivate: [AuthGuard]},
    { path: 'cancel',  component: CancelComponent ,canActivate: [AuthGuard]},

    { path: 'final-dump',  component: FinalDumpComponent,
                             canActivate: [AuthGuard], 
                             data: { roles: [Role.Admin] }},
    { path: 'advance',  component: AdvanceComponent, canActivate: [AuthGuard], 
                                                data: { roles: [Role.Admin] }},
    { path: 'advance-list',  component: AdvanceListComponent, canActivate: [AuthGuard], 
                                                   data: { roles: [Role.Admin] }},
{ path: 'calc-disp',  component:CalcDispComponent, canActivate: [AuthGuard], 
                                                   data: { roles: [Role.Admin] }},
 { path: 'clear-list',  component:ClearListComponent, canActivate: [AuthGuard], 
                                                   data: { roles: [Role.Admin] }},
 { path: 'pay-list',  component:PayListComponent, canActivate: [AuthGuard], 
                                                   data: { roles: [Role.Admin] }},
//  { path: 'extra',  component:ExtraComponent, canActivate: [AuthGuard], 
//                                                    data: { roles: [Role.Admin] }},
    { path: 'login',      component: LoginComponent},
    { path: '**', redirectTo: '' },                              
  
 
    // { path: 'upgrade',        component: UpgradeComponent },
    
    
];
export const routing = RouterModule.forRoot(AdminLayoutRoutes);
