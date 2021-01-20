import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cust-reset-pass-form',
  templateUrl: './cust-reset-pass-form.component.html',
  styleUrls: ['./cust-reset-pass-form.component.css']
})
export class CustResetPassFormComponent implements OnInit {
  customer= new Customer();
  msg = '';
  constructor(
    private _service: CustomerService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  resetPassword(){
    console.log(this.customer);
    this._service.resetPassword(this.customer).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reset-pass-mail',4])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id is not valid';
    });    
  }

}
