import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cust-show-prof',
  templateUrl: './cust-show-prof.component.html',
  styleUrls: ['./cust-show-prof.component.css']
})
export class CustShowProfComponent implements OnInit {

  customer = new Customer();
  msg = '';
  viewDob: any;
  constructor(private _service: CustomerService, private _router: Router) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('custSesEmail') == null ){
      this._router.navigate(['/cust-log']);
    }

    this._service.showProf(this.customer).subscribe(
      data=> {
        //console.log(data);       
        console.log("response recieved");
        this.customer = data;
        console.log(this.customer);
        //this._router.navigate(['/prov-home'])
        this.viewDob = this.customer.custDateOfBirth.substr(0,10);
      },
      error=>{
        console.log("Exception occured");
        this.msg = 'Invalid Credentials';
      }
    )   
    
  }
  updateProf(id: Number){
    console.log(id);
    this._router.navigate(['/cust-update-prof',id])
  }

}
