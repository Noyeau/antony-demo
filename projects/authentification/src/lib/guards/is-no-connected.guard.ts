import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { NoyeauAuthService } from '../authentification.service';

@Injectable({
  providedIn: 'root'
})
export class IsNoConnectedGuard implements CanActivate {
  constructor(
    private _authService: NoyeauAuthService
  ) {
  }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (await this._authService.isConnected()) {
      return false
    } else {
      return true
    }
  }

}
