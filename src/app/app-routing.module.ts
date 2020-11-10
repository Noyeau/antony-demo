import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntonyComponent } from './pages/antony/antony.component';
import { CvComponent } from './components-cv/cv/cv.component';
import { TimelineComponent } from './components-cv/timeline/timeline.component';
import { CompetenceComponent } from './components-cv/competence/competence.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NoyeauComponent } from './pages/noyeau/noyeau.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DiversProjectsComponent } from './pages/divers-projects/divers-projects.component';

const routes: Routes = [
  {
    path:'',
    component:AntonyComponent
  },
  {
    path:'cv',
    component:CvComponent
  },
  {
    path:'experience',
    component:TimelineComponent
  },
  {
    path:'competences',
    component:CompetenceComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'noyeau',
    component:NoyeauComponent
  },
  {
    path:'projets',
    component:ProjectsComponent
  },
  {
    path:'app-divers',
    component:DiversProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
