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

  // public doRegistration(provider){
  //   return this.http.post(baseUrl, provider, {responseType: 'text' as 'json'});
  // }
  public doRegistration(provider :Provider): Observable<any>{
    return this.http.post(baseUrl, provider)
  }

  // create(data): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
  public doLogin(provider :Provider): Observable<any>{
    return this.http.post(baseUrl+'-check', provider)
  }
}
