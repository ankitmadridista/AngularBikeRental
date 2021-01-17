import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../Admin.service';
import { Bike } from '../bike';
import { Booking } from '../booking';
import { BookingService } from '../Booking.service';
import { CustBookBikeModalComponent } from '../cust-book-bike-modal/cust-book-bike-modal.component';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cust-book-bike',
  templateUrl: './cust-book-bike.component.html',
  styleUrls: ['./cust-book-bike.component.css']
})
export class CustBookBikeComponent implements OnInit {
  bike = new Bike();
  booking = new Booking();
  customer = new Customer();
  public bikesArr;
  public bikeArrStat =  false;
  //public booking;
  public bookCustArrStat = false;
  
  //public customer: Customer;
  public custIsActive = false;
  public bookStatus = false;
  msg: any;

  constructor(
    private _service: AdminService, 
    private _router: Router, 
    private _modalService: NgbModal,
    private _service1: CustomerService,
    private _service2: BookingService
    ) { }
  

  ngOnInit(): void {

    //get cust by
    this._service1.getCustByCustId(parseInt(sessionStorage.getItem("custSesId"))).subscribe(
      data=> {
        this.customer = data;
        this.custIsActive = this.customer.custIsActive;
        
        console.log("response recieved");
      },
      error=>{
        console.log("Exception occured");
        this.msg = 'Invalid Credentials';
      }
    )

    //get all avl bikes
    this._service.getAllAvailableBikes().subscribe(
      data=> {
        //console.log(data);
        this.bikesArr = data;
        //console.log(this.bikeAvlArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
        this.bikeArrStat = true;
      },
      error=>{
        console.log("Exception occured");
        this.bikesArr = 'Invalid Credentials';
      }
    )

    //get active booking of cust
    this._service2.getCustCurrBookByCustId(parseInt(sessionStorage.getItem('custSesId'))).subscribe(
      data=> {
        //console.log(sessionStorage.getItem("custSesId"));
        //console.log(data);
        if( data != null ){
          this.booking = data;
        }
        //console.log(this.bikeAvlArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
        this.bookCustArrStat = true;
        if( this.booking.bookStatus == "Completed")
          this.bookStatus = true;
      },
      error=>{
        console.log("Exception occured");
        //this.booking = 'Invalid Credentials';
      }
    )
   

    this._service2.getCustBookToPay(parseInt(sessionStorage.getItem('custSesId'))).subscribe(
      data=> {
       // console.log(sessionStorage.getItem("custSesId"));
        if( data != null ){
          this.booking = data;
        }
        //console.log(data);
        console.log("response recieved");
        this.bookCustArrStat = true;
        if( this.booking.bookStatus == "Completed")
          this.bookStatus = true;
      },
      error=>{
        console.log("Exception occured");
        //this.booking = 'Invalid Credentials';
      }
    )

  }

  onUpdate(bike: Bike){
    //console.log(id);
    const activeModal = this._modalService.open(CustBookBikeModalComponent, { size: 'lg' });
    activeModal.componentInstance.bike = bike;

  }


  doPayment(booking: Booking){
    console.log(booking);
    booking.bookPaymentStatus = "Paid";
    this._service2.paymentDone(booking).subscribe(
      data=> {
        this.booking = data;
        console.log("response recieved");
        this._router.navigate(['/cust-payment-success'])
      },
      error=>{
        console.log("Exception occured");
        this.msg = 'Payment failed';        
        this._router.navigate(['/cust-payment-success'])
      }
    )
  }

}
