import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../Admin.service';

@Component({
  selector: 'app-admin-reset-pass-form',
  templateUrl: './admin-reset-pass-form.component.html',
  styleUrls: ['./admin-reset-pass-form.component.css']
})
export class AdminResetPassFormComponent implements OnInit {

  admin= new Admin();
  msg = '';
  constructor(
    private _service: AdminService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  resetPassword(){
    console.log(this.admin);
    this._service.resetPassword(this.admin).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reset-pass-mail',2])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id is not valid';
    });    
  }

}
