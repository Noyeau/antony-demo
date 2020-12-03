import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserFile } from './class/userFile';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MediasService {

  private mediaServerUrl = "http://localhost:3001"



  private _userId: number
  public get userId() {
    return this._userId
  }

  public set userId(value) {
    this._userId = value
  }

  private _userToken: string
  public get userToken() {
    return this._userToken
  }

  public set userToken(value) {
    this._userToken = value
  }


  constructor(private http:HttpClient){

  }

  getUrlMedia(userFile: UserFile, size:string="thum") {
    let url = this.mediaServerUrl + "/media/" + userFile.id

    url += "?size=" + size

    if (this.userToken) {
      url += "&userToken=" + this.userToken
    }

    if (userFile.public) {
      return url
    }

    if (userFile.userId == this.userId) {
      return url
    }

    if (userFile.token) {
      url += "&token=" + userFile.token
    }
 
    return url
  }


  getUserFile(fileId){
    return this.http.get(this.mediaServerUrl+'/files/'+fileId)
  }

  getUserSpace(){
    return this.http.get(this.mediaServerUrl+'/profile/space')
  }

  getMyUserFiles(){
    return this.http.get(this.mediaServerUrl+'/files/')
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = this.mediaServerUrl + '/files/upload';
    const formData: FormData = new FormData();
    formData.append('files', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData)
  
}
}
