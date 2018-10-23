import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, empty } from 'rxjs';
import { map, filter, switchMap, catchError, } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { FareQuoteRequest, FareQuoteResponse } from '../models/fare-quote.model';
import { BookRequest, BookResponse } from '../models/book.model'
import { FlightTicket } from '../models/flight-ticket.model'
@Injectable()
export class FareQuoteService {
  constructor(private http: HttpClient) {
  }

  getFareQuote(fareQuoteRequest: FareQuoteRequest): Observable<FareQuoteResponse> {
    debugger;
    return this.http.post(environment.serviceUrl + '/postFareQuote',
      fareQuoteRequest).pipe(map((res: FareQuoteResponse) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }

  bookFlight(bookRequest: BookRequest): Observable<BookResponse> {
    return this.http.post(environment.serviceUrl + '/bookFlight',
      bookRequest).pipe(map((res: BookResponse) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }

  getTicket(ticketRequest: any): Observable<any> {
    return this.http.post(environment.serviceUrl + '/getTicket',
      ticketRequest).pipe(map((res: any) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }

  sendTicket(flightTickets: Array<FlightTicket>): Observable<any> {
    return this.http.post(environment.serviceUrl + '/sendTicket',
      flightTickets).pipe(map((res: any) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(environment.serviceUrl + '/registerUser',
      data).pipe(map((res: any) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }

  resetUser(data: any): Observable<any> {
    return this.http.post(environment.serviceUrl + '/resetUser',
      data).pipe(map((res: any) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }

  getBookings(data: any): Observable<any> {
    return this.http.post(environment.serviceUrl + '/getBookings',
      data).pipe(map((res: any) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }

  cancelTicket(data: any): Observable<any> {
    return this.http.post(environment.serviceUrl + '/cancelTicket',
      data).pipe(map((res: any) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }
  
  refundMoney(data: any): Observable<any> {
    return this.http.post(environment.serviceUrl + '/refundMoney',
      data).pipe(map((res: any) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))
  }
  
}