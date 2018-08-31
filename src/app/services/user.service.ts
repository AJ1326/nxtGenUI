import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable ,  of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {URLS} from "../core/common/url-constant";


export interface JWTTokenContext {
  key: string;
}

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient,
              ) { }


  getRoles(context: JWTTokenContext): Observable<any> {
    return this.httpClient.request(
      'get', `api/user/roles/`,
      {headers: {'Authorization': 'token ' + context.key}}
    );
  }



}
