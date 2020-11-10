import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-noyeau',
  templateUrl: './noyeau.component.html',
  styleUrls: ['./noyeau.component.scss']
})
export class NoyeauComponent implements OnInit {
  appList: any[]=[];
  apiList: any[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLists()
  }

  getLists() {
    let requests = [
      this.http.get(environment.api + '/appList'),
      this.http.get(environment.api + '/apiList')
    ]
    forkJoin(requests).subscribe((res: any[]) => {
      this.appList = res[0]
      this.apiList = res[1]

    })


  }

}
