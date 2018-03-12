import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '@env/environment';
import {forEach} from "@angular/router/src/utils/collection";

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    /* For jwt auth token implementation */
    // if(jwttoken){
    //   headers = headers + {'Authorization': "JWT-token"};
    // }

    request = request.clone({
      url: environment.serverUrl + request.url,
      setHeaders: headers
    });
    return next.handle(request);
  }

}
