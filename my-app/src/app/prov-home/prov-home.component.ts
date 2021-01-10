import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prov-home',
  templateUrl: './prov-home.component.html',
  styleUrls: ['./prov-home.component.css']
})
export class ProvHomeComponent implements OnInit {
msg = '';
x: any;
  constructor( ) { }

  ngOnInit(): void {
    let x = sessionStorage.getItem('provSesFname');
    let y = sessionStorage.getItem('provSesId');
    console.log(x);
    console.log(y);
    this.msg = x;
    console.log(this.msg);
  }


}
