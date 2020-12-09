import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { ProvLogFormComponent } from './prov-log-form/prov-log-form.component';
import { ProvRegFormComponent } from './prov-reg-form/prov-reg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProvLogFormComponent,
    ProvRegFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
