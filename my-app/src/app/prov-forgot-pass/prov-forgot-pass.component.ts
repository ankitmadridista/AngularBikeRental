import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ProviderService } from 'src/app/provider.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-prov-forgot-pass',
  templateUrl: './prov-forgot-pass.component.html',
  styleUrls: ['./prov-forgot-pass.component.css']
})
export class ProvForgotPassComponent implements OnInit {
  provider= new Provider();
  msg = '';
  constructor(
    private _service: ProviderService, 
     private _router: Router
  ) { }

  ngOnInit(): void {
  }

  sendMail(){
    console.log(this.provider);
    this._service.sendResetEamil(this.provider).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reset-pass-mail',1])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id is not valid';
    });    
  }


}
