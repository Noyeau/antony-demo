import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const helper: JwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class NoyeauAuthService {





  compteMultiple: any[] = [];
  accountSelected: string;

  cookieDomaine = this.getDomainName(window.location.hostname); // "noyeau.io"

  set tokenId(value) {
    this.connexionState.next({
      user: this.userConnected,
      tokenId: value
    })
    if (!value) {
      this.cookieService.set('tokenId', '', new Date(150000), '/', this.cookieDomaine);
      return;
    }
    if (this.userConnected) {
      let key = 'tokenId-' + this.userConnected.username;
      this.cookieService.set(key, value, new Date(new Date().setMonth(new Date().getMonth() + 2)), '/', this.cookieDomaine);
    } else {
      this.cookieService.set('tokenId', value, new Date(new Date().setMonth(new Date().getMonth() + 2)), '/', this.cookieDomaine);
    }
  }

  get tokenId() {
    let rep;

    rep = this.cookieService.get('tokenId');
    if (!rep && this.userConnected) {
      let key = 'tokenId-' + this.userConnected.username;
      rep = this.cookieService.get(key);
    }

    if (!rep) {
      let i, results = [];
      let allCookie: {} = this.cookieService.getAll();
      console.log(allCookie);
      for (i in allCookie) {
        if (allCookie.hasOwnProperty(i)) {
          if (i.includes('tokenId-')) {
            let username = i.replace('tokenId-', '');
            if (!this.compteMultiple.includes(username)) {
              this.compteMultiple.push(username);
            }
            results.push({ key: i, val: allCookie[i] });
          }
        }
      }
      if (results.length) {
        if (results.length == 1) {
          rep = results[0].val;
        } else if (this.accountSelected) {
          rep = results.find(el => el.key == 'tokenId-' + this.accountSelected).val;
        }
      }
    }
    return rep;
  }

  set refreshToken(value) {
    if (!value) {
      this.cookieService.set('refreshToken', '', new Date(150000), '/', this.cookieDomaine);
      return;
    }
    if (this.userConnected) {
      let key = 'refreshToken-' + this.userConnected.username;

      this.cookieService.set(key, value, new Date(new Date().setMonth(new Date().getMonth() + 2)), '/', this.cookieDomaine);
    } else {
      this.cookieService.set('refreshToken', value, new Date(new Date().setMonth(new Date().getMonth() + 2)), '/', this.cookieDomaine);
    }

  }

  get refreshToken() {
    let rep;
    rep = this.cookieService.get('refreshToken');
    if (!rep && this.userConnected) {
      let key = 'refreshToken-' + this.userConnected.username;
      rep = this.cookieService.get(key);
    }

    if (!rep) {
      let i, results = [];
      let allCookie: {} = this.cookieService.getAll();
      for (i in allCookie) {
        if (allCookie.hasOwnProperty(i)) {
          if (i.includes('refreshToken-')) {
            results.push({ key: i, val: allCookie[i] });
          }
        }
      }
      if (results.length) {
        if (results.length == 1) {
          rep = results[0].val;
        } else if (this.accountSelected && results.find(el => el.key == 'refreshToken-' + this.accountSelected)) {
          rep = results.find(el => el.key == 'refreshToken-' + this.accountSelected).val;
        }
      }
    }

    console.log('reponse', rep);
    return rep;
  }

  set deviceCode(value) {
    let key = 'deviceCode';
    this.cookieService.set(key, value, new Date(new Date().setFullYear(new Date().getFullYear() + 2)), '/', this.cookieDomaine);
  }

  get deviceCode() {
    let key = 'deviceCode';
    return this.cookieService.get(key);
  }

  public userConnected: any = null;
  isConnectedUpdate: EventEmitter<boolean> = new EventEmitter();
  connexionUpdate: EventEmitter<any> = new EventEmitter();



  connexionState: BehaviorSubject<{user:any, tokenId:string}> = new BehaviorSubject({
    user: this.userConnected,
    tokenId: this.tokenId
  })


  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
  ) {

  }

  async getAccount(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api + '/gateway/user/account/self-full').subscribe(async res => {
        this.userConnected = res;
        this.tokenId = this.tokenId;
        this.refreshToken = this.refreshToken;
        this.cookieService.set('tokenId', '', new Date(150000), '/', this.cookieDomaine);
        this.cookieService.set('refreshToken', '', new Date(150000), '/', this.cookieDomaine);

        // await this._movieService.init();
        resolve(true);
      }, err => {
        reject(err);
      });
    });
  }


  async isConnected(): Promise<any> {
    console.log(this.tokenId);
    return new Promise((resolve) => {
      if (this.userConnected) {
        console.log(0);
        this.isConnectedUpdate.emit(true);

        resolve(true);
      } else if (this.tokenId && this.tokenId !== 'null' && !helper.isTokenExpired(this.tokenId)) {
        //self
        console.log(1);

        this.getAccount().then(() => {
          this.isConnectedUpdate.emit(true);

          resolve(true);
        }, () => {
          this.isConnectedUpdate.emit(false);

          resolve(false);
        });
      } else if (this.refreshToken) {
        console.log(2);
        this.refreshTockenApi().then(() => {
          this.getAccount().then(() => {
            this.isConnectedUpdate.emit(true);

            resolve(true);
          }, () => {
            this.isConnectedUpdate.emit(false);

            resolve(false);
          });
        }, err => {
          this.isConnectedUpdate.emit(false);

          resolve(false);
        });
      } else {
        console.log(3);
        this.isConnectedUpdate.emit(false);

        this.logOut(false);
        resolve(false);
      }
    });
  }

  autoRefreshJwt() {
    setInterval(() => {
      if (this.tokenId && this.userConnected) {
        console.log('test Refresh');
        const now = new Date();
        console.log(now.getTime() > helper.getTokenExpirationDate(this.tokenId).getTime() + 60);
        if (now.getTime() > helper.getTokenExpirationDate(this.tokenId).getTime() + 60) {
          this.refreshTockenApi();
        }
      }

    }, 10000);
  }


  async refreshTockenApi() {
    return new Promise((resolve, reject) => {
      let url = environment.api + '/gateway/user/account/refresh-token';
      let data = {
        deviceCode: this.deviceCode,
        refreshToken: this.refreshToken,
      };
      this.http.post(url, data).subscribe(
        res => {
          this.tokenId = res['tokenId'];
          this.refreshToken = res['refreshToken'];
          resolve(true);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  connectMe(redirect = true) {
    let url = environment.accountApp + '/offline/login?origine=' + window.location.href;
    if (!redirect) {
      url += '&direct=false';
    }
    window.location.replace(url);
  }


  logOut(redirect: boolean = false) {
    if (this.userConnected) {
      this.cookieService.set('tokenId-' + this.userConnected.username, '', new Date(150000), '/', this.cookieDomaine);
      this.cookieService.set('refreshToken-' + this.userConnected.username, '', new Date(150000), '/', this.cookieDomaine);
      this.compteMultiple = this.compteMultiple.filter(compte => compte !== this.userConnected.username);
    } else {
      this.cookieService.set('tokenId', '', new Date(150000), '/', this.cookieDomaine);
      this.cookieService.set('refreshToken', '', new Date(150000), '/', this.cookieDomaine);
    }
    // this._movieService.mySeries=null
    // this._movieService.myFilms=null

    this.userConnected = null;
    this.accountSelected = null;

    if (redirect) {
      this.router.navigate(['/']);
    }
  }


  getDomainName(hostName) {
    return hostName.substring(hostName.lastIndexOf('.', hostName.lastIndexOf('.') - 1) + 1);
  }

  isRole(roles: string[] = []) {
    if (!roles.length || !this.userConnected) {
      return false;
    }
    let rep = false;
    roles.map(role => {
      if (this.userConnected.noyeauProfile.role.includes(role)) {
        rep = true;
      }
    });
    return rep;
  }
}
