import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {
  constructor(private api:ApiService, private route:Router){}
  name=""
  email=""
  phone=""
  username=""
  password=""

  readValues = ()=>{
    let data:any = {
      "name":this.name,
      "email":this.email,
      "phone":this.phone,
      "username":this.username,
      "password":this.password
    }
    this.api.addSecurity(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          this.name=""
          this.email=""
          this.phone=""
          this.username=""
          this.password=""
          alert("Security added successfully")
          window.location.reload()
        }else{
          alert("Error in adding security")
          window.location.reload()
        }
      }
    )
  }
}
