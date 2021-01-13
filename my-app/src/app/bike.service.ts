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
  public modifyBike(bike :Bike): Observable<any>{
      return this.http.put(baseUrl+"/bikes", bike)
  }

  public getBikesByProvId(): Observable<any>{
    //let provId = sessionStorage.getItem("provSesId");
    return this.http.get(baseUrl+"/bikesByProvId/" + parseInt(sessionStorage.getItem("provSesId")) )    
  }

  public getBikesByBikeId(id : Number): Observable<any>{
    return this.http.get(baseUrl+"/bikesByBikeId/" + id)
  }

  public deleteBikeByBikeId(id : Number): Observable<any>{
    //console.log("bike id: " + id );
    return this.http.delete(baseUrl+"/bikes/" + id)
  }

}
