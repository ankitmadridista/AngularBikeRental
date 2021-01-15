import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AdminService } from '../Admin.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-reg-form',
  templateUrl: './admin-reg-form.component.html',
  styleUrls: ['./admin-reg-form.component.css']
})
export class AdminRegFormComponent implements OnInit {

  constructor(
    private _service: AdminService, private _router: Router
  )  {  }
  admin= new Admin();
   msg = '';
  ngOnInit(): void {
  }

  registerNow(){
    this._service.doRegistration(this.admin).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reg-success',1])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id already exists';
    });    
  }

}


//import { Component, OnInit } from '@angular/core';

//import { Router } from '@angular/router';
//import { from } from 'rxjs';
//import { AdminService } from 'src/app/admin.service';
//import { Admin } from '../admin';
//@Component({
  //selector: 'app-admin-reg-form',
  //templateUrl: './admin-reg-form.component.html',
  //styleUrls: ['./admin-reg-form.component.css']
//})
//export class AdminRegFormComponent implements OnInit {

  // provider: Provider=new Provider("","","","",0,"","","","","","","");
  // admin= new Admin();
  // msg = '';

   //constructor(
     //private _service: AdminService, 
     //private _router: Router
    //) { }

  //ngOnInit(): void {
  //}

  // addProvider(): void {
  //   const data = {
  //     // title: this.providerService,
  //     // description: this.providerService.
  //   };
  //   this.providerService.create(data)
  //   .subscribe(
  //     response => {
  //       console.log(response);
  //    //   this.submitted = true;
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  //registerNow(){
    //this._service.doRegistration(this.admin).subscribe(
      //data=> {
      //console.log("response recieved");
      //this._router.navigate(['/reg-success'])
    //},
    //error=>{
      //console.log("Exception occured");
      //this.msg = 'Email id already exists';
    //});    
  //}

//}