import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Booking.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cust-book-history',
  templateUrl: './cust-book-history.component.html',
  styleUrls: ['./cust-book-history.component.css']
})
export class CustBookHistoryComponent implements OnInit {

  public bookCustArr;
  public bookCustArrStat = false;



  constructor(
    private _router: Router, 
    private _service: BookingService) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('custSesEmail') == null ){
      this._router.navigate(['/cust-log']);
    }

    this._service.getPaidBookingByCustId(parseInt(sessionStorage.getItem("custSesId"))).subscribe(
      data=> {
        //console.log(data);
        this.bookCustArr = data;
        //console.log(this.bikeAvlArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
        this.bookCustArrStat = true;
      },
      error=>{
        console.log("Exception occured");
        this.bookCustArr = 'Invalid Credentials';
      }
    )

  }

}
