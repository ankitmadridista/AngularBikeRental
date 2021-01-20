import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../Admin.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  id: Number;

  
  
  provider= new Provider();
  
  customer= new Customer();
  
  admin= new Admin();

  msg = '';
  constructor(
    private _service1: AdminService, 
    private _service2: ProviderService,
    private _service3: CustomerService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id']
  }

  sendMailAdmin(){
    console.log(this.admin);
    this._service1.sendResetEmail(this.admin).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reset-pass-mail',1])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id is not valid';
    });    
  }

  sendMailProv(){
    console.log(this.provider);
    this._service2.sendResetEmail(this.provider).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reset-pass-mail',1])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id is not valid';
    });    
  }

  sendMailCust(){
    console.log(this.customer);
    this._service3.sendResetEmail(this.customer).subscribe(
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
