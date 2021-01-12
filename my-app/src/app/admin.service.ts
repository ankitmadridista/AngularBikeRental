import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';

const baseUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getAllBikes(): Observable<any>{
    return this.http.get(baseUrl+"/adminBikes/"  )    
  }
  
  public getAllRequestedBikes(): Observable<any>{
    return this.http.get(baseUrl+"/bikesByStatus/"+"Requested" )    
  }
  public getAllAvailableBikes(): Observable<any>{
    return this.http.get(baseUrl+"/bikesByStatus/"+"Available" )    
  }
  public getAllBookedBikes(): Observable<any>{
    return this.http.get(baseUrl+"/bikesByStatus/"+"Booked" )    
  }
  
  
}
