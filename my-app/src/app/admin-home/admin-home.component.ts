import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { AdminService } from '../Admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  bike = new Bike();

  public bikeReqArr;  
  public bikeAvlArr;  
  public bikeBookedArr;
  public bikesRejArr;
  constructor(private _service: AdminService, private _router: Router, public _location: Location) { }
  

  ngOnInit(): void {

    this._service.getAllRequestedBikes().subscribe(
      data=> {
        //console.log(data);
        this.bikeReqArr = data;
        console.log(this.bikeReqArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.bikeReqArr = 'Invalid Credentials';
      }
    )

    this._service.getAllAvailableBikes().subscribe(
      data=> {
        //console.log(data);
        this.bikeAvlArr = data;
        console.log(this.bikeAvlArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.bikeAvlArr = 'Invalid Credentials';
      }
    )

    this._service.getAllBookedBikes().subscribe(
      data=> {
        //console.log(data);
        this.bikeBookedArr = data;
        console.log(this.bikeBookedArr);
        console.log("response recieved");
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.bikeBookedArr = 'Invalid Credentials';
      }
    )


    this._service.getAllRejectedBikes().subscribe(
      data=> {
        console.log("response recieved");
        this.bikesRejArr = data;
        console.log(this.bikesRejArr);
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        //this.bikesArr = 'Invalid Credentials';
      }
    )
  }

  acceptRequest(id: Number){
    console.log(id);
    this._service.acceptBike(id).subscribe(
      data=> {
      console.log("response recieved");
      window.location.reload();
    },
    error=>{
      console.log("recieved");
      window.location.reload();
    });    

  }

  rejectRequst(id: Number){
    console.log(id);
    this._service.rejectBike(id).subscribe(
      data=> {
      console.log("response recieved");
      window.location.reload();
    },
    error=>{
      console.log("recieved");
      window.location.reload();
    });    
  }
}

