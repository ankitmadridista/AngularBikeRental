import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prov-show-prof',
  templateUrl: './prov-show-prof.component.html',
  styleUrls: ['./prov-show-prof.component.css']
})
export class ProvShowProfComponent implements OnInit {
provider = new Provider();
msg = '';
viewDob: any;
constructor(private _service: ProviderService, private _router: Router) { }

  ngOnInit(): void {

    if( sessionStorage.getItem('provSesEmail') == null ){
      this._router.navigate(['/prov-log']);
    }

    this._service.showProf(this.provider).subscribe(
      data=> {
        console.log("response recieved");
        this.provider = data;
        console.log(this.provider);
        //this._router.navigate(['/prov-home'])
        this.viewDob = this.provider.provDateOfBirth.substr(0,10);
        
      },
      error=>{
        console.log("Exception occured");
        this.msg = 'Invalid Credentials';
      }
    )
  }

  updateProf(id: Number){
    console.log(id);
    this._router.navigate(['/prov-update-prof',id])
  }
}
