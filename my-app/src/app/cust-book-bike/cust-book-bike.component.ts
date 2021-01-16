import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../Admin.service';
import { Bike } from '../bike';
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

  public bikesArr;
  public bikeArrStat =  false;
  public booking;
  public bookCustArrStat = false;

  public customer: Customer;
  public custIsActive = false;
  
  msg: any;

  constructor(
    private _service: AdminService, 
    private _router: Router, 
    private _modalService: NgbModal,
    private _service1: CustomerService,
    private _service2: BookingService
    ) { }
  

  ngOnInit(): void {

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
    
    
    this._service2.getCustCurrBookByCustId(parseInt(sessionStorage.getItem('custSesId'))).subscribe(
      data=> {
        //console.log(data);
        this.booking = data;
        //console.log(this.bikeAvlArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
        this.bookCustArrStat = true;
      },
      error=>{
        console.log("Exception occured");
        this.booking = 'Invalid Credentials';
      }
    )
   

  }

  onUpdate(bike: Bike){
    //console.log(id);
    const activeModal = this._modalService.open(CustBookBikeModalComponent, { size: 'lg' });
    activeModal.componentInstance.bike = bike;

  }

}
