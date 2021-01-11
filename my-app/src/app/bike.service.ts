import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from './bike';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  
  constructor(private http: HttpClient) { }
  
  public addBike(bike :Bike): Observable<any>{
    return this.http.post(baseUrl+"/bikes", bike)
  }

  public getBikesByProvId(): Observable<any>{
    //let provId = sessionStorage.getItem("provSesId");
    return this.http.get(baseUrl+"/bikesByProvId/" + parseInt(sessionStorage.getItem("provSesId")) )
    
  }
}
