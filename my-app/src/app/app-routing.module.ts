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
    path: 'reg-success',
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
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
