import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { AdminService } from '../Admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-bike-status',
  templateUrl: './admin-bike-status.component.html',
  styleUrls: ['./admin-bike-status.component.css']
})
export class AdminBikeStatusComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts;
  bike = new Bike(); 
  
  public bikeReqArr;  
  public bikeAvlArr;  
  public bikeBookedArr;
  public bikeRejArr;

  public bikeReqArrStat =false;  
  public bikeAvlArrStat =false;  
  public bikeBookedArrStat =false;
  public bikeRejArrStat =false;


  constructor(
    private _service: AdminService,
    private _router: Router, 
    public _location: Location
    ) 
    { }
  ngOnInit(): void {

    if( sessionStorage.getItem('adminSesEmail') == null ){
      this._router.navigate(['/admin-log']);
    }


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  
    this._service.getAllRequestedBikes().subscribe(
      data=> {
        //console.log(data);
        this.bikeReqArr = data;
        //console.log(this.bikeReqArr);
        console.log("response recieved");
        if( this.bikeReqArr.length > 0 )
          this.bikeReqArrStat = true;
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
        if( this.bikeAvlArr.length > 0 )
          this.bikeAvlArrStat = true;
        //console.log(this.bikeAvlArr);
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
        //console.log(this.bikeBookedArr);
        console.log("response recieved");
        if( this.bikeBookedArr.length > 0 )
          this.bikeBookedArrStat = true;
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
        this.bikeRejArr = data;
        if( this.bikeRejArr.length > 0 )
          this.bikeRejArrStat = true;
        //console.log(this.bikesRejArr);
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
