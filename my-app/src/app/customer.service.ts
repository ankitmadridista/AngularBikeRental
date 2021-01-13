import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

const baseUrl = 'http://localhost:8080/api/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  public doRegistration(customer :Customer): Observable<any>{
    return this.http.post(baseUrl, customer)
  }

  public doLogin(customer :Customer): Observable<any>{
    return this.http.post(baseUrl+'-check', customer)
  }
  public showProf(customer :Customer): Observable<any>{
    return this.http.get(baseUrl+'/'+ sessionStorage.getItem('custSesId'))
  }

  public getCustByCustId(id : Number): Observable<any>{
    return this.http.get(baseUrl +"/"+ id)
  }

  public modifyProf(customer: Customer): Observable<any>{
    return this.http.put(baseUrl, customer)
  }
  
}
