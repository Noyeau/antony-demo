import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediasService } from '../../medias.service';
import { UserFile } from '../../class/userFile';

@Component({
  selector: 'app-medias-upload',
  templateUrl: './medias-upload.component.html',
  styleUrls: ['./medias-upload.component.scss']
})
export class MediasUploadComponent implements OnInit {
  @Output() onFinish: EventEmitter<UserFile[]> = new EventEmitter()
  @Output() onUpdate: EventEmitter<UserFile> = new EventEmitter()

  fileToUploads: FileList = null;
  constructor(
    private mediasService: MediasService
  ) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUploads = files
    console.log(this.fileToUploads)
    this.uploadFileToActivity()
  }

  async uploadFileToActivity() {
    let i = 0;
    let rep = []
    while (i < this.fileToUploads.length) {
      rep.push(await this.uploadFileSync(this.fileToUploads.item(i)))
      i++;
    }
    this.onFinish.emit(rep)
  }


  uploadFileSync(file) {
    return new Promise(resolve => {
      file.transfertStatus = "sending"
      this.mediasService.postFile(file).subscribe(res => {
        if(!res[0]){
          file.transfertStatus = "error"
        } else {
          file.transfertStatus = "ok"
        }
        this.onUpdate.emit(res[0])
        resolve(res[0])
      }, err => {
        file.transfertStatus = "error"
        this.onUpdate.emit(null)
        resolve(null)
      })
    })
  }



}
