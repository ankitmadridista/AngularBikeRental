import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prov-bike-booking-history',
  templateUrl: './prov-bike-booking-history.component.html',
  styleUrls: ['./prov-bike-booking-history.component.css']
})
export class ProvBikeBookingHistoryComponent implements OnInit {

  public bookProvArr;
  public bookProvArrStat = false;

  public bill: any;

  constructor(
    private _router: Router, 
    private _service: BookingService) { }
  ngOnInit(): void {
    if( sessionStorage.getItem('provSesId') == null ){
      this._router.navigate(['/prov-log']);
    }
   
    this._service.getBookingByProvId(parseInt(sessionStorage.getItem("provSesId"))).subscribe(
    data=> {
      console.log(data);
      this.bookProvArr = data;
      
      // let totalTime = <any>data.bookEndTimeCalc - <any>data.bookStartTimeCalc;
      // console.log(this.bookProvArr.bookEndTimeCalc + "  " + data.bookStartTimeCalc );
      
      // console.log(totalTime);
      
      // this.bill = (( totalTime / ( 1000 * 60 * 60 ) ) * data.bookChargesPerHours) * 0.8;
      //console.log(this.bikeAvlArr);
      console.log("response recieved");
      if( this.bookProvArr.length > 0 ){
        this.bookProvArrStat = true;
        
       
  
      }
        },
    error=>{
      console.log("Exception occured");
      this.bookProvArr = 'Invalid Credentials';
    }
  )
    }
}

