import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Booking.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../booking';
import { Bike } from '../bike';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cust-book-bike-modal',
  templateUrl: './cust-book-bike-modal.component.html',
  styleUrls: ['./cust-book-bike-modal.component.css']
})
export class CustBookBikeModalComponent implements OnInit {

  bike: Bike;
  booking: Booking;
  constructor(public _activeModal: NgbActiveModal, private _router: Router, private _service: BookingService, ) {}

  ngOnInit(): void {

    let booking = new Booking();
    console.dir( 'bike '+this.bike );
    booking.bikeId = 2;
    console.log('booking '+ booking.bikeId);
    this.booking = booking;
  }

  closeTheModal() {
    this._activeModal.dismiss();
  }

  bookAndClose() {

    this._activeModal.dismiss();
    
    this._service.addBooking(this.booking).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/cust-home'])
      //window.location.reload();
    },
    error=>{
      console.log("Exception occured");
      this._router.navigate(['/cust-home'])   
      //window.location.reload();   
    });    

  }
}
