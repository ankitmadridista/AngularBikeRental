import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Booking.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../booking';
import { Bike } from '../bike';

@Component({
  selector: 'app-admin-book-form-modal',
  templateUrl: './admin-book-form-modal.component.html',
  styleUrls: ['./admin-book-form-modal.component.css']
})
export class AdminBookFormModalComponent implements OnInit {

  bike: Bike;
  booking: Booking;
  date: any;
  constructor(
    public _activeModal: NgbActiveModal, 
    private _router: Router, 
    private _service: BookingService
    ) { }

  ngOnInit(): void {
    
    this.date = new Date().toLocaleString();
  }

  closeTheModal() {
    this._activeModal.dismiss();
  }

  bookAndClose() {
    if( this.booking != null ){
      let today = new Date();
      this.booking.bookStatus = 'Active';

       this.booking.bookStartTimeCalc = today.getTime();
      // let date = today.getDate();
      // let month = today.getMonth();
      // let year = today.getFullYear();      

      // let dateStr = '';
      // dateStr = date + '/' + month + '/' + year ;

      this.booking.bookStartTimeCust = today.toLocaleString();
      console.log(this.booking);
    this._service.bookingOnRide(this.booking).subscribe(
      data=> {
      console.log("response recieved");
      //this._router.navigate(['/cust-home'])
      window.location.reload();
    },
    error=>{
      console.log("Exception occured");
      //this._router.navigate(['/cust-home'])   
      window.location.reload();   
    });    
  
    }
      
    this._activeModal.dismiss();

  }

  rejectRide(){ 

    this._service.rejBooking(this.booking).subscribe(
      data=> {
      console.log("response recieved");
      //this._router.navigate(['/cust-home'])
      window.location.reload();
    },
    error=>{
      console.log("Exception occured");
      //this._router.navigate(['/cust-home'])   
      window.location.reload();   
    });    

    this._activeModal.dismiss();

  }

}
