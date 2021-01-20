import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ProviderService } from 'src/app/provider.service';
import { Provider } from '../provider';
@Component({
  selector: 'app-prov-reset-pass-form',
  templateUrl: './prov-reset-pass-form.component.html',
  styleUrls: ['./prov-reset-pass-form.component.css']
})
export class ProvResetPassFormComponent implements OnInit {

  provider= new Provider();
  msg = '';
  constructor(
    private _service: ProviderService, 
     private _router: Router
  ) { }

  ngOnInit(): void {
  }

  resetPassword(){
    console.log(this.provider);
    this._service.resetPassword(this.provider).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reset-pass-mail',3])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id is not valid';
    });    
  }


}
