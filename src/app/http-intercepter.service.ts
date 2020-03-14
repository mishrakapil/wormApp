import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SpinnerService } from './core/spinner/spinner.service';

import HttpNativeError from './service/util-classes/http-native-error';

interface ResponseErrorItem {
  code: Number;
  description: String;
  errorParams: String;
  fieldName: String;
  message: String;
}
interface ResponseErrors extends Array<ResponseErrorItem> {
}

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private authDetail = null;
  constructor(
    private spinnerService: SpinnerService,
    private storage: Storage) {
    this.storage.get('auth').then((val) => {
      this.authDetail = val;
    });
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
     return next.handle(req).pipe(
      tap(res => {
        if (res.type === 4 && res['status'] === 200 && Array.isArray(res['body']['errors']) && res['body']['errors'].length > 0) {
          const responseError: ResponseErrors = res['body']['errors'];
          responseError.forEach(err => {
            let code:number=null;
            if(err.code === 1 || err.message === 'USER_NOT_LOGGED_IN'){
              code = 401
            }
            else if(err.message === 'INVALID_URI'){
              code = 404
            }
            throw  new HttpNativeError(`${err["description"]}`,code);
          })
        }
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        this.spinnerService.hide();
        const errorCodes = [500];
        const errCode = error["code"] || error.status ;
        let muteNotification = false;
        if(errorCodes.includes(errCode)){
          muteNotification = true;
        }
        return throwError(new HttpNativeError(`${error["message"]}`,errCode,null,muteNotification));
      })
    );
  }
}
