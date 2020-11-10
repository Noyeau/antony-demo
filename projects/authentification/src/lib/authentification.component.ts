import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'noy-authentification',
  template: `
    <!-- <div class="curl"></div> -->
    <img src="/assets/moi.jpg" alt="" />
  `,
  styles: [`




  .curl {
    width:50px;
    height:50px;
      position: absolute;
      z-index: 101;
    top:0;
    right:0;
    background-image: url("/assets/moi.jpg");
    background : 
      linear-gradient(
        225deg, 
        rgba(0,0,0,0),
        #f3f3f3 45%, 
        #ddd 50%, 
        #aaa 50%, 
        #bbb 56%, 
        #ccc 62%, 
        #f3f3f3 80%,
        #fff 100%
      );
    box-shadow : 0 0 10px rgba(0, 0, 0, .5);
    transition: all .5s ease;
  }

  .curl:hover {
    width: 120px;
    height: 120px;
  }
  `]
})
export class AuthentificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
