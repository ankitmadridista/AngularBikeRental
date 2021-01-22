import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../Admin.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
 
  amdin = new Admin();
  msg: any;

  constructor(
    private _router: Router,
    private _service: AdminService
    ) 
    { }
  

  ngOnInit(): void { 

    if( sessionStorage.getItem('adminSesEmail') == null ){
      this._router.navigate(['/admin-log']);
    }
    
    this._service.getAdmin(parseInt(sessionStorage.getItem("adminSesId"))).subscribe(
      data=>{
        this.amdin = data;
        console.log(this.amdin);
        console.log("response recieved");
        
        
      },
      error=>{
        this.msg = error;
        console.log("Exception occured");
        
      }
    )

  }

  // testing(){
    
  //   let name = $("#txtName").val();
  //   alert(name);
  // }
  
}

