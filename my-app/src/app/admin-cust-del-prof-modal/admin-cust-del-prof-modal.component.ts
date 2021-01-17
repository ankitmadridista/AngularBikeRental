import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AdminService } from '../Admin.service';

@Component({
  selector: 'app-admin-cust-del-prof-modal',
  templateUrl: './admin-cust-del-prof-modal.component.html',
  styleUrls: ['./admin-cust-del-prof-modal.component.css']
})
export class AdminCustDelProfModalComponent implements OnInit {
  modalHeader: Number;
  constructor(public _activeModal: NgbActiveModal, 
    private _router: Router, 
    private _service: AdminService, ) {}


  ngOnInit(): void {
  }

  closeTheModal() {
    this._activeModal.dismiss();
  }

  deleteAndClose() {

    this._activeModal.dismiss();
    
    this._service.deleteCustByCustId(this.modalHeader).subscribe(
      data=> {
      console.log("response recieved");
      //this._router.navigate(['/admin-view-cust'])
      window.location.reload();
    },
    error=>{
      console.log("Exception occured");
      //this._router.navigate(['/admin-view-cust'])   
      window.location.reload();   
    });    

    //this._router.navigate(['/prov-show-bikes']);
  }

}
