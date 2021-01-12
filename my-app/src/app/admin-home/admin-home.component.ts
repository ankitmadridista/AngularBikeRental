import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { AdminService } from '../Admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  bike = new Bike();

  public bikesArr;
  public bikeReqArr;  
  public bikeAvlArr;  
  public bikeBookedArr;
  constructor(private _service: AdminService, private _router: Router) { }
  

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


    this._service.getAllBikes().subscribe(
      data=> {
        console.log("response recieved");
        this.bikesArr = data;
        console.log(this.bikesArr);
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        //this.bikesArr = 'Invalid Credentials';
      }
    )
  }

}
