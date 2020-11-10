import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationModule } from 'projects/authentification/src/public-api';
import { MaterialModule } from './materialModule/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AntonyComponent } from './pages/antony/antony.component';
import { CvComponent } from './components-cv/cv/cv.component';
import { RatingComponent } from './components-cv/rating/rating.component';
import { TimelineComponent } from './components-cv/timeline/timeline.component';
import { CompetenceComponent } from './components-cv/competence/competence.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NoyeauComponent } from './pages/noyeau/noyeau.component';
import { AppProjectComponent } from './components-projet/app-project/app-project.component';
import { ApiProjectComponent } from './components-projet/api-project/api-project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DiversProjectsComponent } from './pages/divers-projects/divers-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AntonyComponent,
    CvComponent,
    RatingComponent,
    TimelineComponent,
    CompetenceComponent,
    ContactComponent,
    NoyeauComponent,
    AppProjectComponent,
    ApiProjectComponent,
    ProjectsComponent,
    DiversProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthentificationModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
