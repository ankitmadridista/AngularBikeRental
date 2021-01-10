import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ProviderService } from 'src/app/provider.service';
import { Provider } from '../provider';
@Component({
  selector: 'app-prov-reg-form',
  templateUrl: './prov-reg-form.component.html',
  styleUrls: ['./prov-reg-form.component.css']
})
export class ProvRegFormComponent implements OnInit {

  // provider: Provider=new Provider("","","","",0,"","","","","","","");
   provider= new Provider();
   msg = '';

   constructor(
     private _service: ProviderService, 
     private _router: Router
    ) { }

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

  registerNow(){
    this._service.doRegistration(this.provider).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reg-success'])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id already exists';
    });    
  }

}


