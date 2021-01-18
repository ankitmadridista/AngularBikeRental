import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prov-home',
  templateUrl: './prov-home.component.html',
  styleUrls: ['./prov-home.component.css']
})
export class ProvHomeComponent implements OnInit {
msg = '';
x: any;
  constructor( 
    private _router: Router
  ) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('provSesEmail') == null ){
      this._router.navigate(['/prov-log']);
    }

    let x = sessionStorage.getItem('provSesFname');
    let y = sessionStorage.getItem('provSesId');
    console.log(x);
    console.log(y);
    this.msg = x;
    console.log(this.msg);
  }


}
