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
  constructor(private _service: ProviderService, private _router: Router) { }

  ngOnInit(): void {
    this._service.showProf(this.provider).subscribe(
      data=> {
        console.log(data);
        this.msg = data;
        console.log(this.msg);
        console.log("response recieved");
        this.provider = data;
        console.log(this.provider);
        //this._router.navigate(['/prov-home'])
      },
      error=>{
        console.log("Exception occured");
        this.msg = 'Invalid Credentials';
      }
    )
  }

}
