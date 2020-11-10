import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  code=[
    {
      title:"JavaScript",
      note:4
    },
    {
      title:"Angular2+",
      note:4
    },
    {
      title:"NodeJs",
      note:4
    },
    {
      title:"Ionic",
      note:3
    },
    {
      title:"PWA",
      note:3
    },
    {
      title:"Git",
      note:3
    },
    {
      title:"Swagger",
      note:3
    }
  ]


  video=[
    {
      title:"Avid MediaComposer",
      note:5
    },
    {
      title:"FinalCut",
      note:3
    },
    {
      title:"Adobe Première",
      note:4
    },
    {
      title:"AfterEffect",
      note:4
    },
    {
      title:"Photoshop",
      note:3
    },
    {
      title:"Prise de vue",
      note:3
    },
    {
      title:"Pilote de drone",
      note:3
    }
  ]

  autre=[
    {
      title:"Arduino",
      note:4
    },
    {
      title:"RaspberryPi",
      note:3
    },
    {
      title:"Ubuntu",
      note:3
    },
    {
      title:"Server NAS",
      note:4
    },
    {
      title:"System RAID",
      note:3
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
