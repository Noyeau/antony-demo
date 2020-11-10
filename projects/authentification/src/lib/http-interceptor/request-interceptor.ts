import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AuthentificationService } from '../authentification.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthentificationService
  ) {
  }

  setContentType(req: HttpRequest<any>) {
    if (req.url.includes('download')) {
      const contentType = 'application/json';
      return contentType;
    } else {
      return 'application/json';
    }

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.prepareRequest(req));
  }

  prepareRequest(req: HttpRequest<any>): HttpRequest<any> {
    // Préparation du header si nécesaire
    let header = {}
    if (req.url.includes('upload')) {
      console.log('upload')
      // header = {
      //   'Content-Type': null,
      //   'Accept': "multipart/form-data"
      // };
    } else {
      header = {'Content-Type': 'application/json'} as any;
    }


    // Si on a un token on l'ajoute
    if (this._authService.tokenId) {
      header = {...header, ...{Authorization: this._authService.tokenId}};
    }

// Paramétrage du header
    return req.clone({setHeaders: header});
  }
}
