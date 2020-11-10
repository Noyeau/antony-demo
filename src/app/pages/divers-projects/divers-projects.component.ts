import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divers-projects',
  templateUrl: './divers-projects.component.html',
  styleUrls: ['./divers-projects.component.scss']
})
export class DiversProjectsComponent implements OnInit {
  appList=[
    {
      code: "ratp",
      description: "Affichage des ecrans d'arrivé des Metros Bus RERs et Noctiliens par station. Possibilité de créer une liste de favoris sans créer de compte.",
      label: "Ratp Infos",
      repository: "https://github.com/Noyeau/app-ratp",
      url: "https://ratp.noyeau.io",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
