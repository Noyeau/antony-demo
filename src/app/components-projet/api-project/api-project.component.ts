import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-project',
  templateUrl: './api-project.component.html',
  styleUrls: ['./api-project.component.scss']
})
export class ApiProjectComponent implements OnInit {
@Input() api;
  constructor() { }

  ngOnInit() {
  }

}
