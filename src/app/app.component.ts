import { Component, ViewChild } from '@angular/core';
import { AuthentificationService } from 'projects/authentification/src/public-api';
import { MatSidenav } from '@angular/material/sidenav';
import { MediasService } from 'projects/medias/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'app-antony';
  constructor(
    private _authService: AuthentificationService,
    private _mediasService: MediasService,

  ) {

    this._authService.connexionState.subscribe((res) => {
      if (res.user) {
        this._mediasService.userId = res.user.id
        this._mediasService.userToken = res.tokenId
      } else {
        this._mediasService.userId = null
        this._mediasService.userToken = null
      }
    })
    this._authService.isConnectedUpdate.subscribe(connect => {
      console.log("connect", connect)

      if (!connect) {
        return
      }
    })

    this._authService.isConnected().then(res => {
      console.log(res)
      // this._authService.autoRefreshJwt();
    })
  }



  shareOk() {
    return ("share" in navigator)
  }

  share() {
    let data = {
      title: 'Systèm inovant',
      text: "Noyeau.io est un system de multiple api qui forment un moyau d'applications",
      url: 'https://noyeau.io/'
    }
    console.log(data)
    if (!("share" in navigator)) {
      alert('Web Share API not supported.');
      return;
    }

    window.navigator['share'](data)
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
  }


  test(title, value){
    console.log(title, value)
  }

}
