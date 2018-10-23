import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, empty } from 'rxjs';
import { map, filter, switchMap, catchError ,} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {SearchInputModel,SearchOutputModel} from '../models/search.model'
@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {
  }

  search(searchInputModel:SearchInputModel): Observable<SearchOutputModel> {

    
    debugger;
    return this.http.post(environment.serviceUrl + '/postSearchService',
      searchInputModel).pipe(map((res:SearchOutputModel) => {
        return res;
      }), catchError((err, caught) => {
        return Observable.throw(x => x.empty());
      }))



  }







}