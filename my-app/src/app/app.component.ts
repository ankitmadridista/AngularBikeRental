import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  sesAdmEmail : string;
  sesCustEmail : string;
  sesProvEmail : string;

  ngOnInit(): void {
    this.sesAdmEmail = sessionStorage.getItem('adminSesEmail');
    this.sesCustEmail = sessionStorage.getItem('custSesEmail');
    this.sesProvEmail = sessionStorage.getItem('provSesEmail');
  }

}
