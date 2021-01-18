import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from '../customer';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-cust-reg-form',
  templateUrl: './cust-reg-form.component.html',
  styleUrls: ['./cust-reg-form.component.css']
})
export class CustRegFormComponent implements OnInit {
  customer = new Customer();
  msg = '';
  datePickerConfig: Partial<BsDatepickerConfig>;
  //data: Date;

  constructor(
    private _service: CustomerService, 
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
    // $(document).ready(function () {
    //   console.log("in jqury");
    //     let age = "";
    //     $('#provDateOfBirth').datepicker({
    //         onSelect: function (value, ui) {
    //             var today = new Date();
    //             this.age = today.getFullYear() - ui.selectedYear;
    //             //console.log(age);
    //             if(age > 18 ){
    //               $('#provAge').val(age);
    //             }
    //             else{
    //               window.alert("The minimum age requirement for applicant is 18 years old.");
    //               $('#provDateOfBirth').val("");
    //               $('#provAge').val("");
    //             }
    //         },
    //         changeMonth: true,
    //         changeYear: true
    //     })
    // })

    //let dob = $("#provDateOfBirth").val();
    //alert(dob);
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
    age = (today.getMonth() == data.getMonth() && today.getDate() > data.getDate()) ? 
     today.getFullYear() - data.getFullYear() : (today.getMonth() > data.getMonth()) ? 
           today.getFullYear() - data.getFullYear() : 
                 today.getFullYear() - data.getFullYear() - 1;
    dobStr = year + '/' + month + '/'+ date; 
    console.log('curr yr: ' + today.getFullYear());
    console.log(age);
    console.log(dobStr);
    if(age > 18 ){
        $('#custAge').val(age);
        this.customer.custAge = age;
        //this.customer.custDateOfBirth = this.dobStr; 
      }
      else{ 
      //  window.alert("The minimum age requirement for applicant is 18 years old.");
        
        $('#custDateOfBirth').val("");
        $('#custAge').val("");
      }
    }
  }

  registerNow(){
    console.log(this.customer);
    this._service.doRegistration(this.customer).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/reg-success',3])
    },
    error=>{
      console.log("Exception occured");
      this.msg = 'Email id already exists';
    });    
  }

}


