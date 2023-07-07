import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-visitors-log',
  templateUrl: './visitors-log.component.html',
  styleUrls: ['./visitors-log.component.css']
})
export class VisitorsLogComponent {
  constructor(private api:ApiService){}
  name=""
  phone=""

  addEntry = ()=>{
    let data:any = {
      "name":this.name,
      "phone":this.phone,
    }
    this.api.addVisEntry(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("success")
          window.location.reload()
        }else{
          alert("failed")
          window.location.reload()
        }
      }
    )
  }

  addExit = ()=>{
    let data:any = {
      "phone":this.phone,
    }
    this.api.addVisExit(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("success")
          window.location.reload()
        }else{
          alert("failed")
          window.location.reload()
        }
      }
    )
  }
}
