import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
@Input() width='80px'
@Input() height=null

  constructor() { }

  ngOnInit() {
    if(!this.height){
      this.height=this.width
    }
  }

}
