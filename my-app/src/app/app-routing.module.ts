import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProvLogFormComponent } from './prov-log-form/prov-log-form.component';
import { ProvRegFormComponent } from './prov-reg-form/prov-reg-form.component';
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
import { CustBookBikeComponent } from './cust-book-bike/cust-book-bike.component';
import { AdminBikeStatusComponent } from './admin-bike-status/admin-bike-status.component';
import { AdminBookStatusComponent } from './admin-book-status/admin-book-status.component';
import { CustBookHistoryComponent } from './cust-book-history/cust-book-history.component';
import { AdminViewCustComponent } from './admin-view-cust/admin-view-cust.component';
import { AdminViewProvComponent } from './admin-view-prov/admin-view-prov.component';
import { AdminCustUpdateProfComponent } from './admin-cust-update-prof/admin-cust-update-prof.component';
import { AdminProvUpdateProfComponent } from './admin-prov-update-prof/admin-prov-update-prof.component';
import { CustPaymentSuccessComponent } from './cust-payment-success/cust-payment-success.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetPassMailComponent } from './reset-pass-mail/reset-pass-mail.component';
import { ProvResetPassFormComponent } from './prov-reset-pass-form/prov-reset-pass-form.component';
import { AdminResetPassFormComponent } from './admin-reset-pass-form/admin-reset-pass-form.component';
import { CustResetPassFormComponent } from './cust-reset-pass-form/cust-reset-pass-form.component';
import { ProvBikeBookingHistoryComponent } from './prov-bike-booking-history/prov-bike-booking-history.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminBookingHistoryComponent } from './admin-booking-history/admin-booking-history.component';


const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  }, {
    path: 'prov-log',
    component: ProvLogFormComponent,
  },{
    path: 'prov-reg',
    component: ProvRegFormComponent,
  },{
    path: 'reg-success/:id',
    component: RegSuccessComponent,
  },{
    path: 'prov-home',
    component: ProvHomeComponent,
  },{
    path: 'prov-show-prof',
    component: ProvShowProfComponent,
  },{
    path: 'prov-add-bike',
    component: ProvAddBikeComponent,
  },{
    path: 'prov-show-bikes',
    component: ProvShowBikesComponent,
  },{
    path: 'prov-update-bike/:id',
    component: ProvUpdateBikeComponent,
  },{
    path: 'admin-home',
    component: AdminHomeComponent,
  },{
    path: 'admin-log',
    component: AdminLogFormComponent,
  },{
    path: 'admin-reg',
    component: AdminRegFormComponent,
  },{
    path: 'prov-update-prof/:id',
    component: ProvUpdateProfComponent,
  },{
    path: 'cust-log',
    component: CustLogFormComponent,
  },{
    path: 'cust-reg',
    component: CustRegFormComponent,
  },{
    path: 'cust-home',
    component: CustHomeComponent
  },{
    path: 'cust-show-prof',
    component: CustShowProfComponent
  },{
    path: 'cust-update-prof/:id',
    component: CustUpdateProfComponent,
  },{
    path: 'cust-book-bike',
    component: CustBookBikeComponent,
  },{
    path: 'admin-bike-status',
    component: AdminBikeStatusComponent,
  },{
    path: 'admin-book-status',
    component: AdminBookStatusComponent,
  },{
    path: 'cust-book-history',
    component: CustBookHistoryComponent,
  },{
    path: 'admin-view-cust',
    component: AdminViewCustComponent,
  },{
    path: 'admin-view-prov',
    component: AdminViewProvComponent,
  },{
    path: 'admin-cust-update-prof/:id',
    component: AdminCustUpdateProfComponent,
  },{
    path: 'admin-prov-update-prof/:id',
    component: AdminProvUpdateProfComponent,
  },{
    path: 'cust-payment-success',
    component: CustPaymentSuccessComponent,
  },{
    path: 'forgot-pass/:id',
    component: ForgotPassComponent,
  },{
    path: 'reset-pass-mail/:id',
    component: ResetPassMailComponent,
  },{
    path: 'admin-reset-pass-form',
    component: AdminResetPassFormComponent,
  },{
    path: 'prov-reset-pass-form',
    component: ProvResetPassFormComponent,
  },{
    path: 'cust-reset-pass-form',
    component: CustResetPassFormComponent,
  },{
    path: 'prov-bike-booking-history',
    component: ProvBikeBookingHistoryComponent,
  },{
    path: 'about-us',
    component: AboutUsComponent,
  },{
    path: 'contact-us',
    component: ContactUsComponent,
  },{
    path: 'admin-booking-history',
    component: AdminBookingHistoryComponent,
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
