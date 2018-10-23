import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, empty } from 'rxjs';
import { map, filter, switchMap, catchError ,} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {LoginModel} from '../models/login.model'
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAuthenticate(userName:string,password:string,ip:string): Observable<any> {

    
    let parms = {
      "ClientId": "ApiIntegrationNew",
      "UserName": userName,
      "Password": password,
      "EndUserIp": ip
    }
    let body = parms;
    return this.http.post(environment.serviceUrl + '/postDataService',
      body).pipe(map((res: any) => {
        return res;

      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))



  }


  getIpCliente(): Promise<any> {
    debugger;
      return this.http.get('http://api.ipify.org/?format=json').toPromise().then(
        x=>{return x}
      )
  }




}