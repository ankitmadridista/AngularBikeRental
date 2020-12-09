import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
//import { ProviderService } from 'src/app/provider.service';
//import { Prov } from '../prov';
@Component({
  selector: 'app-prov-reg-form',
  templateUrl: './prov-reg-form.component.html',
  styleUrls: ['./prov-reg-form.component.css']
})
export class ProvRegFormComponent implements OnInit {

  //provider: Prov=new Prov("","","","",0,"","","","","","","");
  // provider: Prov=new Prov();
  // message:any;

  // constructor(private providerService : ProviderService) { }

  ngOnInit(): void {
  }

  // addProvider(): void {
  //   const data = {
  //     // title: this.providerService,
  //     // description: this.providerService.
  //   };
  //   this.providerService.create(data)
  //   .subscribe(
  //     response => {
  //       console.log(response);
  //    //   this.submitted = true;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  // public registerNow(){
  //   let response = this.providerService.doRegistration(this.provider)
  //   response.subscribe((data)=>this.message=data);
  // }

}


