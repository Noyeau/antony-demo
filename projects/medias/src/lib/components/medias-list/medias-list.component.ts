import { Component, OnInit, Input } from '@angular/core';
import { UserFile } from '../../class/userFile';
import { MediasService } from '../../medias.service';

@Component({
  selector: 'noy-medias-list',
  templateUrl: './medias-list.component.html',
  styleUrls: ['./medias-list.component.scss']
})
export class MediasListComponent implements OnInit {

  @Input() userFiles: UserFile[] = [];
  @Input() myFiles: boolean = false;

  filesDisplay = []

  selected = null

  constructor(
    private mediasService: MediasService
  ) { }

  ngOnInit() {
    if (this.myFiles) {
      return this.mediasService.getMyUserFiles().subscribe((res: UserFile[]) => {
        this.userFiles = res
        setTimeout(() => {
          this.addFilteToDisplay()
        },500)

      })
    }
    setTimeout(() => {
      this.addFilteToDisplay()
    },500)


  }

  addFilteToDisplay() {
    this.filesDisplay.push(this.userFiles[this.filesDisplay.length])
    if (this.filesDisplay.length < this.userFiles.length) {
      setTimeout(() => {
        this.addFilteToDisplay()
      },100)
    }
  }


  getThumb(userFile: UserFile) {
    return this.mediasService.getUrlMedia(userFile, 'thum')
  }

  openInNewTab(userFile: UserFile) {
    window.open(this.mediasService.getUrlMedia(userFile, 'sd'), "_blank");
  }

}
