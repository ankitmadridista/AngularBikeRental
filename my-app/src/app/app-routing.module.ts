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
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
