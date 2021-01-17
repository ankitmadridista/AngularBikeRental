import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { ProvLogFormComponent } from './prov-log-form/prov-log-form.component';
import { ProvRegFormComponent } from './prov-reg-form/prov-reg-form.component';
import { ProviderService } from './provider.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { ProvHomeComponent } from './prov-home/prov-home.component';
import { ProvShowProfComponent } from './prov-show-prof/prov-show-prof.component';
import { ProvAddBikeComponent } from './prov-add-bike/prov-add-bike.component';
import { ProvShowBikesComponent } from './prov-show-bikes/prov-show-bikes.component';
import { ProvUpdateBikeComponent } from './prov-update-bike/prov-update-bike.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLogFormComponent } from './admin-log-form/admin-log-form.component';
import { AdminRegFormComponent } from './admin-reg-form/admin-reg-form.component';
import { ProvUpdateProfComponent } from './prov-update-prof/prov-update-prof.component';
import { CustLogFormComponent } from './cust-log-form/cust-log-form.component';
import { CustRegFormComponent } from './cust-reg-form/cust-reg-form.component';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { CustShowProfComponent } from './cust-show-prof/cust-show-prof.component';
import { CustUpdateProfComponent } from './cust-update-prof/cust-update-prof.component';
import { ProvDelBikeModalComponent } from './prov-del-bike-modal/prov-del-bike-modal.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustBookBikeComponent } from './cust-book-bike/cust-book-bike.component';
import { CustBookBikeModalComponent } from './cust-book-bike-modal/cust-book-bike-modal.component';
import { AdminBikeStatusComponent } from './admin-bike-status/admin-bike-status.component';
import { AdminBookStatusComponent } from './admin-book-status/admin-book-status.component';
import { AdminBookFormModalComponent } from './admin-book-form-modal/admin-book-form-modal.component';
import { AdminEndRideFormModalComponent } from './admin-end-ride-form-modal/admin-end-ride-form-modal.component';
import { CustBookHistoryComponent } from './cust-book-history/cust-book-history.component';
import { AdminViewProvComponent } from './admin-view-prov/admin-view-prov.component';
import { AdminViewCustComponent } from './admin-view-cust/admin-view-cust.component';
import { AdminCustUpdateProfComponent } from './admin-cust-update-prof/admin-cust-update-prof.component';
import { AdminCustDelProfModalComponent } from './admin-cust-del-prof-modal/admin-cust-del-prof-modal.component';
import { AdminProvUpdateProfComponent } from './admin-prov-update-prof/admin-prov-update-prof.component';
import { AdminProvDelProfModalComponent } from './admin-prov-del-prof-modal/admin-prov-del-prof-modal.component';
import { CustPaymentSuccessComponent } from './cust-payment-success/cust-payment-success.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProvLogFormComponent,
    ProvRegFormComponent,
    RegSuccessComponent,
    ProvHomeComponent,
    ProvShowProfComponent,
    ProvAddBikeComponent,
    ProvShowBikesComponent,
    ProvUpdateBikeComponent,
    AdminHomeComponent,
    AdminLogFormComponent,
    AdminRegFormComponent,
    ProvUpdateProfComponent,
    CustLogFormComponent,
    CustRegFormComponent,
    CustHomeComponent,
    CustShowProfComponent,
    CustUpdateProfComponent,
    ProvDelBikeModalComponent,
    CustBookBikeComponent,
    CustBookBikeModalComponent,
    AdminBikeStatusComponent,
    AdminBookStatusComponent,
    AdminBookFormModalComponent,
    AdminEndRideFormModalComponent,
    CustBookHistoryComponent,
    AdminViewProvComponent,
    AdminViewCustComponent,
    AdminCustUpdateProfComponent,
    AdminCustDelProfModalComponent,
    AdminProvUpdateProfComponent,
    AdminProvDelProfModalComponent,
    CustPaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CountdownModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
