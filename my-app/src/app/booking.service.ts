import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  public addBooking(booking :Booking): Observable<any>{
    return this.http.post(baseUrl+"/booking", booking)
  }

  public getReqBooking(): Observable<any>{
    return this.http.get(baseUrl+"/booking-req")
  }
  public getAccBooking(): Observable<any>{
    return this.http.get(baseUrl+"/booking-acc")
  }
  public getActBooking(): Observable<any>{
    return this.http.get(baseUrl+"/booking-act")
  }
  
  public accBooking(booking: Booking): Observable<any>{
    return this.http.post(baseUrl+"/update-booking-accepted", booking )    
  }

  public rejBooking(booking: Booking): Observable<any>{
    return this.http.post(baseUrl+"/update-booking-rejected/", booking )    
  }

  public getBookingByCustId(id: Number): Observable<any>{
    return this.http.get(baseUrl+"/cust-booking/"+id)
  }

  public bookingOnRide(booking: Booking): Observable<any>{
    return this.http.put(baseUrl+"/booking", booking)    
  }

  
}
