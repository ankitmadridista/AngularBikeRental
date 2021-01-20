import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../Admin.service';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-admin-prov-update-prof',
  templateUrl: './admin-prov-update-prof.component.html',
  styleUrls: ['./admin-prov-update-prof.component.css']
})
export class AdminProvUpdateProfComponent implements OnInit {

  provider: Provider;
  id: Number;
  msg = '';
  constructor( private _service: ProviderService,
    private _service1: AdminService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('adminSesEmail') == null ){
      this._router.navigate(['/admin-log']);
    }

    this.id = this._activatedRoute.snapshot.params['id']
    
    this._service.getProvByProvId(this.id).subscribe(
      data=> {
        //console.log(data);
        this.provider = new Provider();
        this.provider = data;
        //console.log(this.bike);
        console.log("response recieved");
      },
      error=>{
        console.log("Exception occured");
      }
    )

  }

  updateProf(){
    this._service.modifyProf(this.provider).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/admin-view-prov'])
    },
    error=>{
      console.log("Exception occured");
      //this._router.navigate(['/admin-view-prov'])
      this.msg = 'Email-Id already exists';
    });    

  }


}
