import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Booking.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../booking';
import { Bike } from '../bike';

@Component({
  selector: 'app-admin-end-ride-form-modal',
  templateUrl: './admin-end-ride-form-modal.component.html',
  styleUrls: ['./admin-end-ride-form-modal.component.css']
})
export class AdminEndRideFormModalComponent implements OnInit {
  totalTime : any;
  bike: Bike;
  booking: Booking;
  temp: Number;
  constructor(
    public _activeModal: NgbActiveModal, 
    private _router: Router, 
    private _service: BookingService
    ) { }

  ngOnInit(): void {
  }

  closeTheModal() {
    this._activeModal.dismiss();
  }

  bookAndClose() {
    if( this.booking != null ){
      let today = new Date();
      this.booking.bookStatus = 'Completed';
      
      this.booking.bookEndTimeCalc = today.getTime();
      this.booking.bookEndTimeCust = today.toLocaleString();
      
      let totalTime = <any>this.booking.bookEndTimeCalc - <any>this.booking.bookStartTimeCalc;
      console.log( 'start time: '+ this.booking.bookStartTimeCust);
      console.log( 'end time: '+ this.booking.bookEndTimeCust);

      console.log( 'total time: '+ totalTime);

      this.booking.bookBillAmount = ( totalTime / ( 1000 * 60 * 60 ) ) * 
      <any>this.booking.bookChargesPerHours + 
      <any>this.booking.bookInitialFuelCost;  
      
      this.booking.bookBillAmount = <any>this.booking.bookBillAmount - <any>this.booking.bookDepositAmount;
      
      console.log( 'bill: '+ this.booking.bookBillAmount);

        this._service.bookingCompleted(this.booking).subscribe(
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

}
