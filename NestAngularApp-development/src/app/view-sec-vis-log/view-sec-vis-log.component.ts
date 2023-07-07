import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-sec-vis-log',
  templateUrl: './view-sec-vis-log.component.html',
  styleUrls: ['./view-sec-vis-log.component.css']
})
export class ViewSecVisLogComponent {
  date=""
  constructor(private api:ApiService){
    api.getSecVisLogs().subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.visitorLogs = response
      }
    )
  }

  searchLog = ()=>{
    this.api.searchVisLogs({"date":this.date}).subscribe(
      (response:any)=>{
        this.searchData = response
      }
    )
  }

  visitorLogs:any = []
  loading:boolean = true
  searchData:any = []
}
