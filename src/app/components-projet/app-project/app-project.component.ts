import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-project',
  templateUrl: './app-project.component.html',
  styleUrls: ['./app-project.component.scss']
})
export class AppProjectComponent implements OnInit {
@Input() app;
  constructor() { }

  ngOnInit() {
  }

}
