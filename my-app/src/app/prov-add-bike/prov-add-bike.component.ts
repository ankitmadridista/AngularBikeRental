
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from 'src/app/Bike.service';
import { Bike } from '../bike';

@Component({
  selector: 'app-prov-add-bike',
  templateUrl: './prov-add-bike.component.html',
  styleUrls: ['./prov-add-bike.component.css']
})
export class ProvAddBikeComponent implements OnInit {
  bike = new Bike();
  msg = '';
  constructor(
    private _service: BikeService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    if( sessionStorage.getItem('provSesEmail') == null ){
      this._router.navigate(['/prov-log']);
    }
  }
  
  insertBike(){
    this.bike.provId = parseInt( sessionStorage.getItem("provSesId")) ;
    this._service.addBike(this.bike).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/prov-home'])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Bike already exists';
    });    
  }

}
