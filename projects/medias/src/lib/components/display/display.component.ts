import { Component, OnInit, Input } from '@angular/core';
import { UserFile } from '../../class/userFile';
import { MediasService } from '../../medias.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() userFile: UserFile = null;
  @Input() fileId: number = null;

  @Input() size: string = "sd";


  constructor(private mediasService: MediasService) {

  }

  ngOnInit() {
    if(!this.userFile){
      this.getUserFile()
    }
  }

  getUrl() {
   return this.mediasService.getUrlMedia(this.userFile, this.size)
  }


  getUserFile(){
    this.mediasService.getUserFile(this.fileId).subscribe((res:UserFile)=>{
      this.userFile=res
    })
  }


}
