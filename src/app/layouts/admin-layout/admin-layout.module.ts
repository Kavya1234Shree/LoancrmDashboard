import { ExtraComponent } from './../../extra/extra.component';
import { PayListComponent } from './../../pay-list/pay-list.component';
import { ClearListComponent } from './../../clear-list/clear-list.component';
import { CalcDispComponent } from './../../calc-disp/calc-disp.component';
import { CancelComponent } from './../../cancel/cancel.component';
import { LoginComponent } from './../../login/login.component';
import { ErrorInterceptor } from './../../_helpers/error.interceptor';
import { JwtInterceptor } from './../../_helpers/jwt.interceptor';
import { fakeBackendProvider } from './../../_helpers/fake-backend';
import { AdvanceListComponent } from './../../advance-list/advance-list.component';
import { AdvanceComponent } from './../../advance/advance.component';
import { FinalDumpComponent } from './../../final-dump/final-dump.component';
import { ReturnedLoginComponent } from './../../returned-login/returned-login.component';
import { TotaldataListComponent } from './../../totaldata-list/totaldata-list.component';
import { OwnerRegComponent } from './../../owner-reg/owner-reg.component';
import { OwnerListComponent } from './../../owner-list/owner-list.component';
import { RecievedComponent } from './../../recieved/recieved.component';
import { ReworkComponent } from './../../rework/rework.component';



import { EmployeeService } from './../../app.service';
import { FourwheelRegComponent } from './../../fourwheel-reg/fourwheel-reg.component';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
     NgxPaginationModule ,
     Ng2SearchPipeModule,
     ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),
  ],
  declarations: [
    // MaskPipe,
    // NumberMaskPipe,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    FourwheelRegComponent,
    ReworkComponent,
    RecievedComponent,
    OwnerListComponent,
    OwnerRegComponent,
    TotaldataListComponent,
    ReturnedLoginComponent,
    FinalDumpComponent,
    AdvanceComponent,
    AdvanceListComponent,
      LoginComponent,
      CancelComponent,
      CalcDispComponent,
      ClearListComponent,
      PayListComponent,
      ExtraComponent
   
  
    
  ],
  providers: [EmployeeService,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider]

})

export class AdminLayoutModule {}
