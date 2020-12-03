import { Component, OnInit } from '@angular/core';
import { MediasService } from '../../medias.service';

@Component({
  selector: 'app-medias-space',
  templateUrl: './medias-space.component.html',
  styleUrls: ['./medias-space.component.scss']
})
export class MediasSpaceComponent implements OnInit {

  space: any = null
  constructor(
    private mediasService: MediasService
  ) { }

  ngOnInit() {
    this.mediasService.getUserSpace().subscribe(res => {
      this.space = res
    })
  }

}
