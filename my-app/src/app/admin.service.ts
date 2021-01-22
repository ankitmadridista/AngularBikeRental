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

  public getAllRejectedBikes(): Observable<any>{
    return this.http.get(baseUrl+"/bikes-status/"+"Rejected" )    
  }
  
  public getAllRequestedBikes(): Observable<any>{
    return this.http.get(baseUrl+"/bikes-status/"+"Requested" )    
  }
  public getAllAvailableBikes(): Observable<any>{
    return this.http.get(baseUrl+"/bikes-status/"+"Available" )    
  }
  public getAllBookedBikes(): Observable<any>{
    return this.http.get(baseUrl+"/bikes-status/"+"Booked" )    
  }  
  
  public acceptBike(id: Number): Observable<any>{
    return this.http.get(baseUrl+"/bikes-update-available/"+id )    
  }
  
  public rejectBike(id: Number): Observable<any>{
    return this.http.get(baseUrl+"/bikes-update-rejected/"+id )    
  }

  
  public doRegistration(admin: Admin): Observable<any>{
    return this.http.post(baseUrl+"/admin", admin )    
  }
  public doLogin(admin: Admin): Observable<any>{
    return this.http.post(baseUrl+"/admin-check", admin )    
  }

  public getAllCustomers(): Observable<any>{
    return this.http.get(baseUrl+"/customer/")  
  }

  public getAllProviders(): Observable<any>{
    return this.http.get(baseUrl+"/providers/")  
  }

  public deleteCustByCustId(id : Number): Observable<any>{
    return this.http.delete(baseUrl+"/customer/" + id)
  }
  public deletepProvByProvId(id : Number): Observable<any>{
    return this.http.delete(baseUrl+"/providers/" + id)
  }

  public sendResetEmail(admin :Admin ): Observable<any>{
    return this.http.post( "http://localhost:8080/api/admin-link-mail" , admin)
  }
  
  public resetPassword(admin :Admin): Observable<any>{
    return this.http.post( "http://localhost:8080/api/admin-reset-pass" , admin )
  }

  public modifyProf(admin :Admin): Observable<any>{
    return this.http.put( "http://localhost:8080/api/admin" , admin )
  }

  public getAdmin(id: number): Observable<any>{
    return this.http.get( "http://localhost:8080/api/admin/" + id )
  }

}
