import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-success',
  templateUrl: './reg-success.component.html',
  styleUrls: ['./reg-success.component.css']
})
export class RegSuccessComponent implements OnInit {
  id: Number;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  //this.status = 
  this.id = this._activatedRoute.snapshot.params['id']
  }

}
