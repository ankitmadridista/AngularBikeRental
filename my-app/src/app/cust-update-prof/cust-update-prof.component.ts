import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cust-update-prof',
  templateUrl: './cust-update-prof.component.html',
  styleUrls: ['./cust-update-prof.component.css']
})
export class CustUpdateProfComponent implements OnInit {
  customer: Customer;
  id: Number;
  msg = '';
  constructor( private _service: CustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
  
      this.id = this._activatedRoute.snapshot.params['id']
    
      this._service.getCustByCustId(this.id).subscribe(
        data=> {
          //console.log(data);
          this.customer = new Customer();
          this.customer = data;
          //console.log(this.bike);
          console.log("response recieved");
        },
        error=>{
          console.log("Exception occured");
        }
    )
  }

    updateProf(){
      this._service.modifyProf(this.customer).subscribe(
        data=> {
        console.log("response recieved");
        this._router.navigate(['/cust-show-prof'])
      },
      error=>{
        console.log("Exception occured");
        this._router.navigate(['/cust-show-prof'])
        //this.msg = 'Bike already exists';
      });    
  
    }

}