import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-leave',
  templateUrl: './view-employee-leave.component.html',
  styleUrls: ['./view-employee-leave.component.css']
})
export class ViewEmployeeLeaveComponent {
  constructor(private api:ApiService){
    let data:any = {
      "id": localStorage.getItem("userInfo")
    }
    api.getEmpLeaves(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.leaves = response
      }
    )
  }
  leaves:any = []
  loading:boolean = true
}
