import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() note: number = 1
  @Input() title: string = "element"


  constructor() { }

  ngOnInit() {
  }

  isActive(i){
    if(i>this.note){
      return false
    }
    return true
  }

}
