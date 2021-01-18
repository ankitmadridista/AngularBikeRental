import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  sesAdmEmail : string;
  sesCustEmail : string;
  sesProvEmail : string;
  constructor(
    
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.sesAdmEmail = sessionStorage.getItem('adminSesEmail');
    this.sesCustEmail = sessionStorage.getItem('custSesEmail');
    this.sesProvEmail = sessionStorage.getItem('provSesEmail');

    console.log(this.sesAdmEmail + " " + this.sesCustEmail + " " + this.sesProvEmail);
    
  }

  doLogout(){
    console.log("in logout");
    sessionStorage.clear();
    this._router.navigate(['/index'])
    
  }

}
