import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-handle-leave',
  templateUrl: './handle-leave.component.html',
  styleUrls: ['./handle-leave.component.css']
})
export class HandleLeaveComponent {
  constructor(private api: ApiService, private route:Router) {
    api.getAllLeaves().subscribe(
      (response: any) => {
        this.loading = false
        this.leaves = response
      }
    )
  }
  updateStatus = (id:any,empId:any, status:any, type:any,from:any,to:any,) => {
    let data: any = { 
      "id": id, 
      "empId": empId, 
      "leaveStatus": status, 
      "leaveType": type, 
      "fromDate": from, 
      "toDate": to 
    }
    this.api.handleLeave(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          if(status == 1){
            alert("Leave Approved")
          }else{
            alert("Leave Rejected")
          }
          window.location.reload()
        }else{
          alert("failed")
          window.location.reload() 
        }
        
      }
    )
  }
  leaves: any = []
  loading: boolean = true
}
