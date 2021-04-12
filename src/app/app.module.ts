





import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {  MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from  '@angular/material/dialog';
import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OnlineDriveComponent } from './online-drive/online-drive.component';
import { OfflineDriveComponent } from './offline-drive/offline-drive.component';
import { TwoRegComponent } from './two-reg/two-reg.component';
import { FourRegComponent } from './four-reg/four-reg.component';
import { FouroffilneComponent } from './fouroffilne/fouroffilne.component';
import { FouronlineComponent } from './fouronline/fouronline.component';
import { PickedOrderComponent } from './picked-order/picked-order.component';
import { AcceptedOrderComponent } from './accepted-order/accepted-order.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { TableDialogComponent } from './table-dialog/table-dialog.component';
import { TopoDialogComponent } from './topo-dialog/topo-dialog.component';
import { IconDialogComponent } from './icon-dialog/icon-dialog.component';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { NotyDialogComponent } from './noty-dialog/noty-dialog.component';
import { MatFormFieldModule,MatInputModule, } from '@angular/material';
import { LoginComponent } from './login/login.component';

import { ReworkDialogComponent } from './rework-dialog/rework-dialog.component';
import { RecievedDialogComponent } from './recieved-dialog/recieved-dialog.component';
import { OwnerRegComponent } from './owner-reg/owner-reg.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { TotaldataListComponent } from './totaldata-list/totaldata-list.component';
import { ReturnedLoginComponent } from './returned-login/returned-login.component';
import { ReturnedDialogComponent } from './returned-dialog/returned-dialog.component';
import { FinalDumpComponent } from './final-dump/final-dump.component';
import { AdvanceComponent } from './advance/advance.component';

import { AdvanceListComponent } from './advance-list/advance-list.component';
import { TotaldataDialogComponent } from './totaldata-dialog/totaldata-dialog.component';
import { ErrorInterceptor, JwtInterceptor, fakeBackendProvider } from './_helpers';

import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import { OwnerDialogComponent } from './owner-dialog/owner-dialog.component';
import { ClearListComponent } from './clear-list/clear-list.component';
import { ClearDialogComponent } from './clear-dialog/clear-dialog.component';
import { DumpDialogComponent } from './dump-dialog/dump-dialog.component';
import { PayListComponent } from './pay-list/pay-list.component';
import { ExtraComponent } from './extra/extra.component';
import { PayDialogComponent } from './pay-dialog/pay-dialog.component';
// import { NumberMaskPipe } from './number-mask.pipe';
import { TextMaskModule } from 'angular2-text-mask';
// import { MaskPipe } from "./mask.pipe";
// import { CalcDispComponent } from './calc-disp/calc-disp.component';
// import { TotalDialogComponent } from './total-dialog/total-dialog.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    // MaskPipe,
    AppComponent,
    // NumberMaskPipe,
    AdminLayoutComponent,
    OnlineDriveComponent,
    OfflineDriveComponent,
    TwoRegComponent,
    FourRegComponent,
    FouroffilneComponent,
    FouronlineComponent,
    PickedOrderComponent,
    AcceptedOrderComponent,
    UserDialogComponent,
    TableDialogComponent,
    TopoDialogComponent,
    IconDialogComponent,
    MapDialogComponent,
    NotyDialogComponent,
    //  LoginComponent,
  
    ReworkDialogComponent,
    RecievedDialogComponent,
  
    ReturnedDialogComponent,
  
    TotaldataDialogComponent,
  
    
  
    CancelDialogComponent,
  
    
  
    OwnerDialogComponent,
  
    
  
   
  
    
  
    ClearDialogComponent,
  
    
  
   
  
    
  
    DumpDialogComponent,
  
    
  
   
  
    
  
    PayDialogComponent,
  
    
  
   
  
    
  
    
  
    
  
   
  
    
  
   
  
    
  
    // CalcDispComponent,
  
 
    
  
    
  
    
    
 
    
 
   
    
  ],
  providers: [{ provide: MatDialogRef, useValue: {} },{ provide: MAT_DIALOG_DATA, useValue: [] },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  
  bootstrap: [AppComponent],
  entryComponents: [UserDialogComponent,TopoDialogComponent,TableDialogComponent,NotyDialogComponent,MapDialogComponent,IconDialogComponent,ReworkDialogComponent,RecievedDialogComponent,ReturnedDialogComponent,TotaldataDialogComponent,OwnerDialogComponent,CancelDialogComponent,ClearDialogComponent,DumpDialogComponent,PayDialogComponent]
})
export class AppModule { }
