import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  data:any = {
    "id":localStorage.getItem("userInfo")
  }
  constructor(private api:ApiService){
      api.securityProfile(this.data).subscribe(
        (response:any)=>{
          this.security = response
        }
      )
  }
  security:any = []
}
