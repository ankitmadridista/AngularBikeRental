import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bike } from '../bike';
import { BikeService } from '../Bike.service';
import { ProvDelBikeModalComponent } from '../prov-del-bike-modal/prov-del-bike-modal.component';
@Component({
  selector: 'app-prov-show-bikes',
  templateUrl: './prov-show-bikes.component.html',
  styleUrls: ['./prov-show-bikes.component.css']
})
export class ProvShowBikesComponent implements OnInit {
  bike = new Bike();

  public bikesArr;
  public bikeArrStat =  false;
  
  constructor(private _service: BikeService, private _router: Router, private _modalService: NgbModal) { }
  
  ngOnInit(): void {

    if( sessionStorage.getItem('provSesEmail') == null ){
      this._router.navigate(['/prov-log']);
    }

    this._service.getBikesByProvId().subscribe(
      data=> {
        this.bikesArr = data;
        //console.log(this.bikesArr);        
        console.log("response recieved");
        if(this.bikesArr.length !== 0 ){
          this.bikeArrStat = true; 
        }
      },
      error=>{
        console.log("Exception occured");
        this.bikesArr = 'Invalid Credentials';
      }
    )
  }
  //getBikesByBikeId
  onUpdate(id: Number){
    //console.log(id);
    this._router.navigate(['/prov-update-bike',id])
  }

  onDelete(id: Number){
    //console.log(id);
    // this._modalService.open(ProvDelBikeModalComponent, {
    //   centered: true,
    // });

    const activeModal = this._modalService.open(ProvDelBikeModalComponent, { size: 'lg' });
    activeModal.componentInstance.modalHeader = id;

  }

  
}
