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

  public custArr;
  public custArrStat = false;

  constructor(private _service: AdminService, 
    private _service1: CustomerService,
    private _router: Router, private _modalService: NgbModal) { }

  ngOnInit(): void {
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
        this.custArr = 'Invalid Credentials';
      }
    )
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
