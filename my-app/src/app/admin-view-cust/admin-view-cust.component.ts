import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../Admin.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { AdminCustDelProfModalComponent } from '../admin-cust-del-prof-modal/admin-cust-del-prof-modal.component';


@Component({
  selector: 'app-admin-view-cust',
  templateUrl: './admin-view-cust.component.html',
  styleUrls: ['./admin-view-cust.component.css']
})
export class AdminViewCustComponent implements OnInit {


  customer = new Customer();

  public custArr : [];
  public dobArr : any;
  public custArrStat = false;


  constructor(private _service: AdminService, 
    private _service1: CustomerService,
    private _router: Router, private _modalService: NgbModal) { }


    dtOptions: DataTables.Settings = {};


  ngOnInit(): void {

    if( sessionStorage.getItem('adminSesEmail') == null ){
      this._router.navigate(['/admin-log']);
    }
    
    
    this._service.getAllCustomers().subscribe(
      data=>{
        this.custArr = data;

        console.log("response recieved");
        if(this.custArr.length !== 0){
          this.custArrStat = true;
        }

        
      },
      error=>{
        console.log("Exception occured");
       // this.custArr = 'Invalid Credentials';
      }
    )

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };

  }


  onUpdate(id: Number){
    //console.log(id);
    this._router.navigate(['/admin-cust-update-prof',id])
  }

  onDelete(id: Number){
    // console.log(id);
    //  this._modalService.open(, {
    // centered: true,
    //  });

    const activeModal = this._modalService.open(AdminCustDelProfModalComponent, { size: 'lg' });
    activeModal.componentInstance.modalHeader = id;
  }


}
