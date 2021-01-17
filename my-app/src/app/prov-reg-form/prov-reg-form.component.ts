import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ProviderService } from 'src/app/provider.service';
import { Provider } from '../provider';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-prov-reg-form',
  templateUrl: './prov-reg-form.component.html',
  styleUrls: ['./prov-reg-form.component.css']
})
export class ProvRegFormComponent implements OnInit {

   provider= new Provider();
   msg = '';
   datePickerConfig: Partial<BsDatepickerConfig>;

   constructor(
     private _service: ProviderService, 
     private _router: Router
    ) { 
      this.datePickerConfig = Object.assign({}, 
        {
         containerClass: 'theme-dark-blue',
         showWeekNumbers: false
        }
      
      )
    }

  ngOnInit(): void {
  }

  onValueChange(value: Date): void {
    let dobStr = '';
    if( value !== null ){
      
    let age;
    console.log(value);
    let data = value;
    let date =  data.getDate();
    let month = data.getMonth();
    let year = data.getFullYear();
    console.log('birth yr: ' + year);
    
    var today = new Date();
    age = today.getFullYear() - year;
    dobStr = year + '/' + month + '/'+ date; 
    console.log('curr yr: ' + today.getFullYear());
    console.log(age);
    console.log(dobStr);
    if(age > 18 ){
        $('#custAge').val(age);
        this.provider.provAge = age;
        //this.customer.custDateOfBirth = this.dobStr; 
      }
      else{ 
        window.alert("The minimum age requirement for applicant is 18 years old.");
        $('#provDateOfBirth').val("");
        $('#provAge').val("");
      }
    }
  }

  registerNow(){
    console.log(this.provider);
    this._service.doRegistration(this.provider).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reg-success',2])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id already exists';
    });    
  }

}


