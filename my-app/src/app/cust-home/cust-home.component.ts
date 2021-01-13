import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-home',
  templateUrl: './cust-home.component.html',
  styleUrls: ['./cust-home.component.css']
})
export class CustHomeComponent implements OnInit {
  msg = '';
  x: any;
    constructor( ) { }

    ngOnInit(): void {
      let x = sessionStorage.getItem('custSesFname');
      let y = sessionStorage.getItem('custSesId');
      console.log(x);
      console.log(y);
      this.msg = x;
      console.log(this.msg);
    }

}
