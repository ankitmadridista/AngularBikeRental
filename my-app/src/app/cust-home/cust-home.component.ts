import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-home',
  templateUrl: './cust-home.component.html',
  styleUrls: ['./cust-home.component.css']
})
export class CustHomeComponent implements OnInit {
  msg = '';
  x: any;
    constructor(
      private _router: Router
     ) { }

    ngOnInit(): void {

      if( sessionStorage.getItem('custSesEmail') == null ){
        this._router.navigate(['/cust-log']);
      }

      let x = sessionStorage.getItem('custSesFname');
      let y = sessionStorage.getItem('custSesId');
      console.log(x);
      console.log(y);
      this.msg = x;
      console.log(this.msg);
    }

}
