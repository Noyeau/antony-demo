import { NgModule } from '@angular/core';
import { AuthentificationComponent } from './authentification.component';
import { HttpInterceptorProviders } from './http-interceptor';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { CornerComponent } from './components/corner/corner.component';



@NgModule({
  declarations: [CornerComponent],
  imports: [
    HttpClientModule
  ],
  providers: [HttpInterceptorProviders, CookieService],
  exports: [CornerComponent]
})
export class AuthentificationModule { }
