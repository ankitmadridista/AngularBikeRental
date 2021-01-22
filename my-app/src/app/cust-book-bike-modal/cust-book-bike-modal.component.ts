import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Booking.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../booking';
import { Bike } from '../bike';

@Component({
  selector: 'app-cust-book-bike-modal',
  templateUrl: './cust-book-bike-modal.component.html',
  styleUrls: ['./cust-book-bike-modal.component.css']
})
export class CustBookBikeModalComponent implements OnInit {

  bike: Bike;
  booking: Booking;
  name: string;
  date:  any;

  constructor(public _activeModal: NgbActiveModal, private _router: Router, private _service: BookingService ) {}

  ngOnInit(): void {

    this.date = new Date().toLocaleString();
    //console.log(this.date);
    

    let booking = new Booking();
    console.dir( 'bike '+this.bike );
    booking.bikeId = this.bike.bikeId;
    booking.provId = this.bike.provId;
    booking.custId = parseInt(sessionStorage.getItem('custSesId'));
    booking.bookChargesPerHours = this.bike.chargesPerHour;
    this.name = sessionStorage.getItem('custSesFname');
    console.log('booking '+ booking.bikeId);
    this.booking = booking;
  
  }

  closeTheModal() {
    this._activeModal.dismiss();
  }

  bookAndClose() {

    
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

    
    this._activeModal.dismiss();
  }
}
