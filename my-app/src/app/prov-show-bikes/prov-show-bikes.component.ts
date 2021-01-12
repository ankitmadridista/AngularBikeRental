import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../Bike.service';

@Component({
  selector: 'app-prov-show-bikes',
  templateUrl: './prov-show-bikes.component.html',
  styleUrls: ['./prov-show-bikes.component.css']
})
export class ProvShowBikesComponent implements OnInit {
  bike = new Bike();

  public bikesArr;
  
  constructor(private _service: BikeService, private _router: Router) { }

  
  ngOnInit(): void {
    this._service.getBikesByProvId().subscribe(
      data=> {
        console.log(data);
        this.bikesArr = data;
        console.log(this.bikesArr);
        console.log("response recieved");
        this.bike = data;
        console.log(this.bike);
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.bikesArr = 'Invalid Credentials';
      }
    )


  }
  //getBikesByBikeId
  onUpdate(id: Number){
    console.log(id);
    this._router.navigate(['/prov-update-bike',id])
  }

}
