import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import {NgForm} from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-log-form',
  templateUrl: './cust-log-form.component.html',
  styleUrls: ['./cust-log-form.component.css']
})
export class CustLogFormComponent implements OnInit {

  customer = new Customer();
  msg = '';
    constructor(private _service: CustomerService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginCustomer(){
    //console.log("button clicked");
    this._service.doLogin(this.customer).subscribe(
      data=> {
        sessionStorage.setItem('custSesId', data.custId);
        sessionStorage.setItem('custSesFname', data.custFname);
        console.log(data);
        console.log("response recieved");
        this._router.navigate(['/cust-home'])
      },
      error=>{
        console.log("Exception occured");
        this.msg = 'Invalid Credentials';
      }
    )
  }

}





  