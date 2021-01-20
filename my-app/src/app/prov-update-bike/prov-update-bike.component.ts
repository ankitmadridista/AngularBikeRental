import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../Bike.service';

@Component({
  selector: 'app-prov-update-bike',
  templateUrl: './prov-update-bike.component.html',
  styleUrls: ['./prov-update-bike.component.css']
})
export class ProvUpdateBikeComponent implements OnInit {
  //bike = new Bike();
  bike: Bike;
  id: Number;
  msg = '';
  
  //public bikeObj: Bike;

  constructor(
    private _service: BikeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('provSesEmail') == null ){
      this._router.navigate(['/prov-log']);
    }

    this.id = this._activatedRoute.snapshot.params['id']
    
    //console.log(this.id);
    this._service.getBikesByBikeId(this.id).subscribe(
        data=> {
          //console.log(data);
          this.bike = new Bike();
          this.bike = data;
          //console.log(this.bike);
          console.log("response recieved");
        },
        error=>{
          console.log("Exception occured");
        }
      )
  }

  updateBike(){
    //this.bike.provId = parseInt( sessionStorage.getItem("provSesId")) ;
    //console.log(this.bike);
    this._service.modifyBike(this.bike).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/prov-show-bikes'])
    },
    error=>{
      console.log("Exception occured");
      //this._router.navigate(['/prov-show-bikes'])
      this.msg = 'Exception occured';
    });    
  }

}
