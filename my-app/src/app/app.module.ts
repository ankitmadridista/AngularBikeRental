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
    ProvShowBikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
