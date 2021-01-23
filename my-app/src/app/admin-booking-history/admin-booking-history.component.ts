import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../Admin.service';
import { BookingService } from '../Booking.service';

@Component({
  selector: 'app-admin-booking-history',
  templateUrl: './admin-booking-history.component.html',
  styleUrls: ['./admin-booking-history.component.css']
})
export class AdminBookingHistoryComponent implements OnInit {
  public bookCompArr;
  public bookCompArrStat = false;

  admin = new Admin();
  msg: any;
  
  constructor(
    private _router: Router, 
    private _service: BookingService,
    private _service1: AdminService
    ) { }

    ngOnInit(): void {

      if( sessionStorage.getItem('adminSesEmail') == null ){
        this._router.navigate(['/admin-log']);
      }

      this._service1.getAdmin(parseInt(sessionStorage.getItem("adminSesId"))).subscribe(
        data=>{
          this.admin = data;
          console.log(this.admin);
          console.log("response recieved");
          
          
        },
        error=>{
          this.msg = error;
          console.log("Exception occured");
          
        }
      )


  
      this._service.getCompBooking().subscribe(
        data=> {
          //console.log(data);
          this.bookCompArr = data;
          console.log(this.bookCompArr);
          console.log(data);
          console.log("response recieved");
         
          if( this.bookCompArr.length > 0 )
            this.bookCompArrStat = true;
        },
        error=>{
          console.log("Exception occured");
          this.bookCompArr = 'Invalid Credentials';
        }
      )
  
    }

}
