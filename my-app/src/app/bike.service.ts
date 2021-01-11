import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from './bike';

const baseUrl = 'http://localhost:8080/api/bikes';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  
  constructor(private http: HttpClient) { }
  
  public addBike(bike :Bike): Observable<any>{
    return this.http.post(baseUrl, bike)
  }
}
