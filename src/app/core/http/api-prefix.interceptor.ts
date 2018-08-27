import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '@env/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: any = {
      // 'Content-Type': 'application/json',
    };
    let jwtToken = localStorage.getItem('JWT') || null;


    /* For jwt auth token implementation */
    if (jwtToken) {
      headers['Authorization'] = jwtToken;
    }
    console.log('headers:', headers, 'jwtToken: ', jwtToken);

    request = request.clone({
      url: environment.serverUrl + request.url,
      setHeaders: headers
    });
    return next.handle(request);
  }

}
