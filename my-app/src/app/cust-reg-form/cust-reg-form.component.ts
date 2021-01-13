import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-cust-reg-form',
  templateUrl: './cust-reg-form.component.html',
  styleUrls: ['./cust-reg-form.component.css']
})
export class CustRegFormComponent implements OnInit {
  customer = new Customer();
  msg = '';

  constructor(
    private _service: CustomerService, 
    private _router: Router
   ) { }

  ngOnInit(): void {
  }

  registerNow(){
    console.log(this.customer);
    this._service.doRegistration(this.customer).subscribe(
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


