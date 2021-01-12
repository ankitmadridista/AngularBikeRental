import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../Admin.service';

@Component({
  selector: 'app-admin-log-form',
  templateUrl: './admin-log-form.component.html',
  styleUrls: ['./admin-log-form.component.css']
})
export class AdminLogFormComponent implements OnInit {
  admin = new Admin();
  msg = '';
    constructor(private _service: AdminService, private _router: Router) { }
  
    ngOnInit(): void {
    }
  
    loginAdmin(){
      //console.log("button clicked");
      this._service.doLogin(this.admin).subscribe(
        data=> {
          sessionStorage.setItem('adminSesId', data.adminId);
          sessionStorage.setItem('adminSesEmail', data.adminEmail);
          console.log(data);
          console.log("response recieved");
          this._router.navigate(['/admin-home'])
        },
        error=>{
          console.log("Exception occured");
          this.msg = 'Invalid Credentials';
        }
      )
    }

}
