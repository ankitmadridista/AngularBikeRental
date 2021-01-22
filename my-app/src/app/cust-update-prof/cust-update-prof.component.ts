import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cust-update-prof',
  templateUrl: './cust-update-prof.component.html',
  styleUrls: ['./cust-update-prof.component.css']
})
export class CustUpdateProfComponent implements OnInit {
  customer = new Customer();
  id: Number;
  msg = '';
  // selectedProfPic: File;
  // selectedBikePic: File[];

    // file: File;
    // selectedFile: File;
    // retrievedImage: any;
    // base64Data: any;
    // retrieveResonse: any;
    // message: string;
    // imageName: any;
    // public userFile: any = File;



  datePickerConfig: Partial<BsDatepickerConfig>;
  
  constructor( private _service: CustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute)  {
      this.datePickerConfig = Object.assign({}, 
          {
           containerClass: 'theme-dark-blue',
           showWeekNumbers: false
          }
        
        )
   
     }


  
    ngOnInit(): void {

      if( sessionStorage.getItem('custSesEmail') == null ){
        this._router.navigate(['/cust-log']);
      }
  
      this.id = this._activatedRoute.snapshot.params['id']
    
      this._service.getCustByCustId(this.id).subscribe(
        data=> {
          //console.log(data);
          this.customer = new Customer();
          this.customer = data;
          //console.log(this.bike);
          console.log("response recieved");
        },
        error=>{
          console.log("Exception occured");
        }
    )
  }
 
  // public onSelectProfPic(event) {
  //   //Select File
  //   const file = event.target.files[0];
  //   console.log(file);
  //   this.selectedProfPic = file;
  // }


  //   updateProf(){
  //     let formData = new FormData();

  //     formData.append('customer',JSON.stringify(this.customer));
  //     formData.append('image', this.selectedProfPic);
  //     //console.log(this.selectedFile);
      
  //     console.log(this.customer);
  //     console.log(formData);
  //     this._service.modifyProf(formData).subscribe(
  //       data=> {
  //       console.log("response recieved");
  //       this._router.navigate(['/cust-show-prof'])
  //     },
  //     error=>{
  //       console.log("Exception occured");
  //       //this._router.navigate(['/cust-show-prof'])
  //       this.msg = 'Email-id already exists';
  //     });    
  
  //   }

  updateProf(){
    this._service.modifyProf(this.customer).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/cust-show-prof'])
    },
    error=>{
      console.log("Exception occured");
      //this._router.navigate(['/cust-show-prof'])
      this.msg = 'Email-id already exists';
    });    

  }

       

}
