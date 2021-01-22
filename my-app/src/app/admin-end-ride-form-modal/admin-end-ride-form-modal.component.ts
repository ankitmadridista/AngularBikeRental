import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Booking.service';
import { ProviderService } from '../provider.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../booking';
import { Bike } from '../bike';
import { Provider } from '../provider';
import { AdminService } from '../Admin.service';
import { Admin } from '../admin';

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
  provider: Provider;
  admin: Admin;
  msg: any;
  constructor(
    public _activeModal: NgbActiveModal, 
    private _router: Router, 
    private _service: BookingService,
    private _service1: ProviderService,
    private _service2: AdminService
    ) { }

  ngOnInit(): void {
    this._service1.getProvByProvId(this.booking.provId).subscribe(
      data=> {
        this.provider = data;
        console.log(this.provider);
        console.log('response recieved');
        
      },
      error=>{
        console.log("Exception occured");
      // window.location.reload(); 
      }
    )

    this._service2.getAdmin( parseInt(sessionStorage.getItem("adminSesId") ) ).subscribe(
      data=> {
        this.admin = data;
        console.log(this.admin);
        console.log('response recieved');
        
      },
      error=>{
        console.log("Exception occured");
      // window.location.reload(); 
      }
    )


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
      // console.log( 'start time: '+ this.booking.bookStartTimeCust);
      // console.log( 'end time: '+ this.booking.bookEndTimeCust);

      // console.log( 'total time: '+ totalTime);

      let tempBillAmount = ( totalTime / ( 1000 * 60 * 60 ) ) * 
      <any>this.booking.bookChargesPerHours + 
      <any>this.booking.bookInitialFuelCost;  

      let tempProvWallet = <any>this.provider.provWallet + (( totalTime / ( 1000 * 60 * 60 ) ) * 
      <any>this.booking.bookChargesPerHours) * 0.8;

      console.log(this.provider.provWallet);
      
      tempProvWallet = tempProvWallet.toFixed(2);

      this.provider.provWallet = parseFloat(tempProvWallet);      
      
      
      tempBillAmount = tempBillAmount - <any>this.booking.bookDepositAmount;
      
      tempBillAmount = <any>tempBillAmount.toFixed(2);
      
      this.booking.bookBillAmount = parseFloat(<any>tempBillAmount);
      
      console.log( "adminWall init: "+ this.admin.adminWallet);      

      let tempAdminWallet = <any>this.admin.adminWallet + (( totalTime / ( 1000 * 60 * 60 ) ) * 
      <any>this.booking.bookChargesPerHours) * 0.2;

      this.admin.adminWallet = tempAdminWallet;

      console.log(this.admin.adminWallet );
      

      console.log( 'bill: '+ this.booking.bookBillAmount);

        this._service.bookingCompleted(this.booking).subscribe(
          data=> {
          console.log("response recieved");
        },
        error=>{
          console.log("Exception occured");
        });  

        this._service1.modifyProf(this.provider).subscribe(
          data=> {
          console.log("response recieved");
          window.location.reload();
        },
        error=>{
          console.log("provider updated");
          window.location.reload();
        }); 
        
        this._service2.modifyProf(this.admin).subscribe(
          data=>{
            // this.admin = data;
            //console.log(data);
            //window.location.reload();
          },
          error=>{
            console.log("Exception Occured");
            this.msg = error;
            //window.location.reload();
          });
          
        
      }
    
    //this._activeModal.dismiss();

  }

}
