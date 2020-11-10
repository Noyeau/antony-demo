import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  stickyTop = 0
  scrollTarget = false

  @Input() experiences = [
    {
      poste: "Ingénieur informatique",
      societe: "Cybeletch",
      lieu: "Montrouge, France",
      description:`CybeleTech propose des outils et services logiciels pour réduire les marges d’erreurs sur l’ensemble du cycle de production végétal : de la sélection variétale, la production agricole et sylvicole, la collecte et la transformation. `,
      dateStart: new Date(2020, 4, 1),
      dateEnd: new Date(2020, 5, 18),
      body: `
      <ul>
      <li>Refonte de l'Application web client</li>
      <li>Stack : Ember 3, Node.js,  D3js, Leaflet, Postman, GitLab</li>
    </ul>`
    },
    {
      poste: "Développeur Web",
      societe: "Web Atrio",
      description:`ESN - Prestations de développement, de conseil et d'audit.`,
      lieu: "Paris, France",
      dateStart: new Date(2018, 3, 1),
      dateEnd: new Date(2020, 0, 31),
      body: `
      <b>CFM</b>
      <ul>
      <li>Lead dev' Front sur un Portail web pour un Hedge Fund</li>
      <li>Stack : Angular 8, Postman, Trello, GoogleMapApi, HighChart</li>
      <li>Ateliers fonctionnels avec le client,&nbsp;méthode Scrum,&nbsp;MVP livré,&nbsp;Client satisfait du résultat au vu de la complexité de l’application.</li>
      </ul>
      <b>Fondation ARC</b>
      <ul>
      <li>Dev' Front sur un Portail web d'appel a financement pour les chercheurs</li>
      <li>Stack : Angular 6-7, Postman, Redminde</li>
      </ul>
      <b>Desmaziere</b>
      <ul>
      <li>Dev' Front sur un Extranet entre le fournisseur et les revendeurs</li>
      <li>Stack : Angular 6, Postman, Redminde,&nbsp;méthode Scrum</li>
      </ul>
      <b>Soconext</b>
      <ul>
      <li>Dev' Fullstack sur un  Portail web et backOffice de réservation d'intervention</li>
      <li>Stack : Angular 5, NodeJs, Postman, Redminde, GoogleMapApi</li>
      </ul>
      <b>Les plus</b>
      <ul>
      <li>Formation des nouveaux arrivants front sur Angular</li>
      </ul>
      `
    },
    {
      poste: "Freelance",
      societe: "Intermittent du Spectable",
      description:``,
      lieu: "Paris, France",
      dateStart: new Date(2012, 0, 1),
      dateEnd: new Date(2017, 7, 30),
      body: `
  
      <p><b>Scientifilms</b>, Responsable de PostProduction<br>
      En relation directe avec tous les corps de métier, mon principal travail était le gestion technique de toutes les étapes de la fabrication de documentaires: du tournage jusqu’à la livraison.
      </p>
      <ul>
      <li>"Bébés sur mesure", ARTE - 2017</li>
      <li>"Cannabis sur ordonnance", ARTE - 2017</li>
      <li>"Demain, tous myopes ?", ARTE - 2017</li>
      <li>"Le Cercle des petits philosophes", France2 & Cinema - 2017</li>
      <li>"Déchiffrer la conscience, voyage dans l'étoffe de nos pensées", ARTE - 2016</li>
      <li>"Je me souviens donc je me trompe", ARTE - 2016</li>
      <li>"Notre intelligence dévoilée", ARTE - 2015</li>
      <li>"Ebola, la course contre la mort", LCP et RTBF - 2015</li>
      <li>"Yéti, y-es tu ?", ARTE - 2014</li>
      <li>"Le ventre, notre deuxième cerveau", ARTE - 2013</li>
      <li>"Le Mystère de la matière noire", ARTE - 2012</li>
      <li>"Enquête d'ailleurs" (série documentaire 35 épisodes), ARTE - 2012-2015</li>
    </ul>




    <p><b>Arte Studio</b>, Monteur Vidéo<br>
    Préparateur des bandes PAT (Pret A Diffuser)
    </p>



    <p><b>Scienticom</b>, Technicien vidéo<br>
  Assistant technique lors de séances et stages de MediaTraining pour des chercheurs de divers centres de recherches tels que le CNRS ou l'INSERM.
    </p>

    `
    },
    {
      poste: "Co-fondateur",
      societe: "BAV Events",
      description:`Prestataire technique dans l'évènementiel. Sonorisation, éclairage et captaion vidéo de conférences, meetings politique, compétitions sportives, concerts, etc...`,
      lieu: "Paris, France",
      dateStart: new Date(2010, 2, 1),
      dateEnd: new Date(2011, 11, 31),
      body: `
      <ul>
      <li>Développement du site internet de la société et de plusieurs applications sur-mesure pour des affichages dynamiques utilisés lors de divers événements</li>
      <li>Gestion du Parc Informatique et du réseau</li>
      <li>Interprétation des besoins techniques</li>
      <li>Gestion des équipes et matériels pour les événements.</li>
    </ul>`
    },
    {
      poste: "Responsable technique et réseau",
      societe: "Best Audiovisual",
      description:``,
      lieu: "Paris, France",
      dateStart: new Date(2008, 3, 1),
      dateEnd: new Date(2010, 1, 30),
      body: `
      <ul>
      <li>Gestion du Parc Informatique et du réseau</li>
      <li>Interprétation des besoins techniques</li>
      <li>Gestion des équipes et matériels pour les événements.</li>
      <li>Création du site internet</li>
    </ul>`
    },
  ]


  constructor() { }

  ngOnInit() {
  }

  scrollTo(elemId) {
    let elmnt = document.getElementById(elemId);
    elmnt.scrollIntoView({behavior: "smooth"});
  }



}
