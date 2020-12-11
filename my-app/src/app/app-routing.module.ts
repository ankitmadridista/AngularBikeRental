import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProvLogFormComponent } from './prov-log-form/prov-log-form.component';
import { ProvRegFormComponent } from './prov-reg-form/prov-reg-form.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';

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
  },
  { path: '', redirectTo: '/index', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
