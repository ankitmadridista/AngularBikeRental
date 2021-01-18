import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../Admin.service';
import { Provider } from '../provider';
import { AdminProvDelProfModalComponent } from '../admin-prov-del-prof-modal/admin-prov-del-prof-modal.component';

import { ProviderService} from '../provider.service';

@Component({
  selector: 'app-admin-view-prov',
  templateUrl: './admin-view-prov.component.html',
  styleUrls: ['./admin-view-prov.component.css']
})
export class AdminViewProvComponent implements OnInit {

  provider = new Provider();

  public provArr;
  public provArrStat= false;
    constructor(private _service: AdminService,private _router:Router,private _modalService:NgbModal) { }
    
  ngOnInit(): void {

    if( sessionStorage.getItem('adminSesEmail') == null ){
      this._router.navigate(['/admin-log']);
    }

    this._service.getAllProviders().subscribe(
      data=>{
        this.provArr=data;
        console.log("response received");
        if(this.provArr.length !==0){
          this.provArrStat= true;
        }
      },
      error=>{
        console.log("Exception occured");
        this.provArr='Invalid Credentials';
      }
    )


  }


  onUpdate(id:Number){
    this._router.navigate(['/admin-prov-update-prof',id])
  }
  
  onDelete(id: Number){
    //console.log(id);
    // this._modalService.open(ProvDelBikeModalComponent, {
    //   centered: true,
    // });
  
    const activeModal = this._modalService.open(AdminProvDelProfModalComponent, { size: 'lg' });
    activeModal.componentInstance.modalHeader = id;
  }

}
