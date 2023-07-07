import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {
  data:any = {
    "id":localStorage.getItem("userInfo")
  }
  constructor(private api:ApiService){
      api.employeeProfile(this.data).subscribe(
        (response:any)=>{
          console.log(localStorage.getItem("usrInfo"))
          console.log(response)
          this.employee = response
        }
      )
  }
  employee:any = []
}
