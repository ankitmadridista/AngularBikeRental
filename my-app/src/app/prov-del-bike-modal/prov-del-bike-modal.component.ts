import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BikeService } from '../Bike.service';

@Component({
  selector: 'app-prov-del-bike-modal',
  templateUrl: './prov-del-bike-modal.component.html',
  styleUrls: ['./prov-del-bike-modal.component.css']
})
export class ProvDelBikeModalComponent implements OnInit {
  modalHeader: Number;
  constructor(public _activeModal: NgbActiveModal, private _router: Router, private _service: BikeService, ) {}

  ngOnInit(): void {
   // console.log(this.modalHeader);
    
  }
  closeTheModal() {
    this._activeModal.dismiss();
  }
  deleteAndClose() {

    this._activeModal.dismiss();
    
    this._service.deleteBikeByBikeId(this.modalHeader).subscribe(
      data=> {
      console.log("response recieved");
      this._router.navigate(['/prov-show-bikes'])
      window.location.reload();
    },
    error=>{
      console.log("Exception occured");
      this._router.navigate(['/prov-show-bikes'])   
      window.location.reload();   
    });    

    //this._router.navigate(['/prov-show-bikes']);
  }

}
