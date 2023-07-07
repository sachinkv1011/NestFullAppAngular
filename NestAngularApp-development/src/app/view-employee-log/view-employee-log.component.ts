import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-log',
  templateUrl: './view-employee-log.component.html',
  styleUrls: ['./view-employee-log.component.css']
})
export class ViewEmployeeLogComponent {
  constructor(private api:ApiService){
    api.getEmpLogs({"empId":localStorage.getItem("userInfo")}).subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.empLogs = response
      }
    )
  }
  empLogs:any=[]
  loading:boolean = true
}
