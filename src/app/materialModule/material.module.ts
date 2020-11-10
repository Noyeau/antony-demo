import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';



const material=[
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatChipsModule,
  MatButtonModule
]

const cdk=[
  LayoutModule
]



@NgModule({
  imports: [
    CommonModule,
    material,
    cdk
  ],
  declarations: [],
  exports:[
    material,
    cdk
  ]
})
export class MaterialModule { }
