import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee = (data:any) =>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }

  getEmployee = ()=>{
    return this.http.get("http://localhost:8080/viewAllEmployee")
  }

  searchEmployee = (data:any)=>{
    console.log(data)
    return this.http.post("http://localhost:8080/searchEmployee", data)
  }

  deleteEmployee = (data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee", data)
  }

  updateEmployee = (data:any)=>{
    return this.http.post("http://localhost:8080/editEmployee", data)
  }
  
  getEmpById = (data:any)=>{
    return this.http.post("http://localhost:8080/employeeProfile", data)
  }

  addSecurity = (data:any)=>{
    return this.http.post("http://localhost:8080/addSecurity", data)
  }

  getAllLeaves = ()=>{
    return this.http.get("http://localhost:8080/getAllLeaves")
  }

  handleLeave = (data:any)=>{
    console.log(data)
    return this.http.post("http://localhost:8080/updateLeaves", data)
  }

  securityLogin = (data:any)=>{
    return this.http.post("http://localhost:8080/securityLogin", data)
  }

  securityProfile = (data:any) =>{
    return this.http.post("http://localhost:8080/securityProfile", data)
  }

  addEmpEntry = (data:any)=>{
    return this.http.post("http://localhost:8080/addEmpEntryLog", data)
  }

  addEmpExit = (data:any)=>{
    return this.http.post("http://localhost:8080/addEmpExitLog", data)
  }

  addVisEntry = (data:any) =>{
    return this.http.post("http://localhost:8080/addVisEntryLog",data)
  }
  addVisExit = (data:any) =>{
    return this.http.post("http://localhost:8080/addVisExitLog",data)
  }

  employeeLogin = (data:any)=>{
    return this.http.post("http://localhost:8080/employeeLogin",data)
  }

  employeeProfile = (data:any)=>{
    return this.http.post("http://localhost:8080/employeeProfile",data)
  }

  applyLeave = (data:any)=>{
    return this.http.post("http://localhost:8080/applyLeave",data)
  }

  getEmpLeaves = (data:any)=>{
    return this.http.post("http://localhost:8080/getEmployeeLeaves",data)
  }

  getLeaveDetails = (data:any)=>{
    return this.http.post("http://localhost:8080/getLeaveDetails",data)
  }
  
  getEmpLogs = (data:any)=>{
    return this.http.post("http://localhost:8080/viewEmpLog",data)
  }

  getSecEmpLogs = ()=>{
    return this.http.get("http://localhost:8080/viewSecEmpLog")
  }

  getSecVisLogs = ()=>{
    return this.http.get("http://localhost:8080/viewSecVisLog")
  }

  searchLogs = (data:any)=>{
    return this.http.post("http://localhost:8080/searchEmpLog",data)
  }

  searchVisLogs = (data:any)=>{
    return this.http.post("http://localhost:8080/searchVisLog",data)
  }
}
