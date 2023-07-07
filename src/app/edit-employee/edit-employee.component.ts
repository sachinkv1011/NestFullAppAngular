import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  id=""
  empCode=""
  empName=""
  empEmail=""
  empPhone=""
  empDesignation=""
  username=""
  password=""

  constructor(private api:ApiService, private route:Router){
    this.id= String(route.getCurrentNavigation()?.extras.state);
    api.getEmpById({"id":this.id}).subscribe(
      (response:any)=>{
        console.log(response)
        this.empCode= response[0].empCode
        this.empName= response[0].name
        this.empEmail= response[0].email
        this.empPhone= response[0].phone
        this.empDesignation= response[0].designation
        this.username= response[0].username
      }
    )

  }

  readValues = ()=>{
    let data:any = {
      "id": this.id,
      "empCode": this.empCode,
      "name": this.empName,
      "email": this.empEmail,
      "phone": this.empPhone,
      "designation": this.empDesignation,
      "username": this.username,
   }
   this.api.updateEmployee(data).subscribe(
    (response:any)=>{
      if(response.status=="success"){
        alert("Employee data updated Successfully")
        this.route.navigate(["/viewEmployee"])
      }else{
        alert("Error in editing employee")
        this.route.navigate(["/viewEmployee"])
      }
    }
   )
  }
}
