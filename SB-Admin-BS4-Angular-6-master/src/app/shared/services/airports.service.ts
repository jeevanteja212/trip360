import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AirportService {
  constructor(private http: HttpClient) {
  }

  getairports(val): Promise<any> {
    debugger;
    
      return this.http.get('/assets/static/airports.json').toPromise().then(
        x=>{
         
          return x;
        }
      )
  }




}