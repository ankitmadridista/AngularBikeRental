import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from './provider';

const baseUrl = 'http://localhost:8080/api/providers';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  public doRegistration(provider :Provider): Observable<any>{
    return this.http.post(baseUrl, provider)
  }

  public doLogin(provider :Provider): Observable<any>{
    return this.http.post(baseUrl+'-check', provider)
  }

  public showProf(provider :Provider): Observable<any>{
    return this.http.get(baseUrl+'/'+ sessionStorage.getItem('provSesId'))
  }
  
  public getProvByProvId(id : Number): Observable<any>{
    return this.http.get(baseUrl +"/"+ id)
  }

  public modifyProf(provider: Provider): Observable<any>{
    return this.http.put(baseUrl, provider)
  }

}
