import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../Bike.service';

@Component({
  selector: 'app-prov-update-bike',
  templateUrl: './prov-update-bike.component.html',
  styleUrls: ['./prov-update-bike.component.css']
})
export class ProvUpdateBikeComponent implements OnInit {
  bike = new Bike();
  msg = '';
  constructor(
    private _service: BikeService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    
  }

}
