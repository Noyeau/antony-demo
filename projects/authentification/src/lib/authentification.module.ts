import { NgModule } from '@angular/core';
import { NoyeauHttpInterceptorProviders } from './http-interceptor';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { NoyeauCornerComponent } from './components/corner/corner.component';



@NgModule({
  declarations: [NoyeauCornerComponent],
  imports: [
    HttpClientModule
  ],
  providers: [NoyeauHttpInterceptorProviders, CookieService],
  exports: [NoyeauCornerComponent]
})
export class AuthentificationModule { }
