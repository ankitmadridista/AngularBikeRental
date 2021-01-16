import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BookingService } from '../Booking.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminBookFormModalComponent } from '../admin-book-form-modal/admin-book-form-modal.component';
import { Booking } from '../booking';
import { AdminEndRideFormModalComponent } from '../admin-end-ride-form-modal/admin-end-ride-form-modal.component';
@Component({
  selector: 'app-admin-book-status',
  templateUrl: './admin-book-status.component.html',
  styleUrls: ['./admin-book-status.component.css']
})
export class AdminBookStatusComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts;
   
  public bikeReqBookArr;
  public bikeAccBookArr;
  public bikeActBookArr;
  constructor(
    private _service: BookingService, 
    private _router: Router, 
    public _location: Location,    
    private _modalService: NgbModal
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
      //all accepted booking
    this._service.getAccBooking().subscribe(
      data=> {
        //console.log(data);
        this.bikeAccBookArr = data;
        //console.log(this.bikeReqArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.bikeAccBookArr = 'Invalid Credentials';
      }
    )

    //all active rides
    this._service.getActBooking().subscribe(
      data=> {
        //console.log(data);
        this.bikeActBookArr = data;
        //console.log(this.bikeReqArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.bikeActBookArr = 'Invalid Credentials';
      }
    )
  }

  acceptBooking(booking: Booking){
    this._service.accBooking(booking).subscribe(
      data=> {
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
        window.location.reload();
      },
      error=>{
        console.log("Exception occured");
        //this.bikeReqBookArr = 'Invalid Credentials';
        window.location.reload();
      }
    )
  }

  rejectBooking(booking: Booking){
    this._service.rejBooking(booking).subscribe(
      data=> {       
        console.log("response recieved");
        window.location.reload();
      },
      error=>{
        console.log("Exception occured");
        window.location.reload();
      }
    )
  }

  viewBookingModal(booking: Booking){
    
    const activeModal = this._modalService.open(AdminBookFormModalComponent, { size: 'lg' });
    activeModal.componentInstance.booking = booking;
  }
  endRideModal(booking: Booking){
    
    const activeModal = this._modalService.open(AdminEndRideFormModalComponent, { size: 'lg' });
    activeModal.componentInstance.booking = booking;
  }

}
