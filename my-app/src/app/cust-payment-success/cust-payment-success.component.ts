import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-payment-success',
  templateUrl: './cust-payment-success.component.html',
  styleUrls: ['./cust-payment-success.component.css']
})
export class CustPaymentSuccessComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    if( sessionStorage.getItem('custSesEmail') == null ){
      this._router.navigate(['/cust-log']);
    }
  }

}
