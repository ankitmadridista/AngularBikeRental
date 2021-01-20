import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-prov-update-prof',
  templateUrl: './prov-update-prof.component.html',
  styleUrls: ['./prov-update-prof.component.css']
})
export class ProvUpdateProfComponent implements OnInit {
  provider: Provider;
  id: Number;
  msg = '';
  constructor( private _service: ProviderService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('provSesEmail') == null ){
      this._router.navigate(['/prov-log']);
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
      this._router.navigate(['/prov-show-prof'])
    },
    error=>{
      console.log("Exception occured");
      //this._router.navigate(['/prov-show-prof'])
      this.msg = 'Email-Id already exists';
    });    

  }

}
