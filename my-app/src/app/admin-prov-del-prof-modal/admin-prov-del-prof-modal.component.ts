import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AdminService } from '../Admin.service';

@Component({
  selector: 'app-admin-prov-del-prof-modal',
  templateUrl: './admin-prov-del-prof-modal.component.html',
  styleUrls: ['./admin-prov-del-prof-modal.component.css']
})
export class AdminProvDelProfModalComponent implements OnInit {
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
    
    this._service.deletepProvByProvId(this.modalHeader).subscribe(
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
