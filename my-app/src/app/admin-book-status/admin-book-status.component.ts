import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BookingService } from '../Booking.service';
@Component({
  selector: 'app-admin-book-status',
  templateUrl: './admin-book-status.component.html',
  styleUrls: ['./admin-book-status.component.css']
})
export class AdminBookStatusComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts;
   
  public bikeReqBookArr;

  constructor(
    private _service: BookingService, 
    private _router: Router, 
    public _location: Location
    ) 
    { }

  ngOnInit(): void {

    //all pending bookings
    this._service.getReqBooking().subscribe(
      data=> {
        //console.log(data);
        this.bikeReqBookArr = data;
        //console.log(this.bikeReqArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.bikeReqBookArr = 'Invalid Credentials';
      }
    )
  }

}
