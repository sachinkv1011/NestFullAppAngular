import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  name = ""
  constructor(private api: ApiService, private route: Router) {
    api.getEmployee().subscribe(
      (response: any) => {
        this.loading = false
        this.employeeData = response
      }
    )
  }

  searchEmployee = () => {
    let data: any = {
      "name": this.name
    }
    if (this.name.length == 0) {
      this.searchData = []
    } else {
      this.api.searchEmployee(data).subscribe(
        (response: any) => {
          if (response.length == 0) {
            this.searchData = []
          } else {
            this.searchData = response
          }
        }
      )
    }

  }

  deleteBtnClick = (id: any) => {
    let data: any = {
      "id": id
    }
    this.api.deleteEmployee(data).subscribe(
      (response: any) => {
        if (response.satus == "success") {
          alert("Employee Deleted")
        } else {
          alert("Error in deletion")
        }
      }
    )
  }
  editBtnClick = (id:any)=>{
    this.route.navigate(["/editEmployee"],{state:id})
  }

  employeeData: any = []
  searchData: any = []
  loading: boolean = true
}
