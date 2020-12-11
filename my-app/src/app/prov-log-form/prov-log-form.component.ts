import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prov-log-form',
  templateUrl: './prov-log-form.component.html',
  styleUrls: ['./prov-log-form.component.css']
})
export class ProvLogFormComponent implements OnInit {
provider = new Provider();
msg = '';
  constructor(private _service: ProviderService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginProvider(){
    //console.log("button clicked");
    this._service.doLogin(this.provider).subscribe(
      data=> {
        console.log("response recieved");
        this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.msg = 'Invalid Credentials';
      }
    )
  }
}
