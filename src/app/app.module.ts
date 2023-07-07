import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { HandleLeaveComponent } from './handle-leave/handle-leave.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';
import { CreateLogComponent } from './create-log/create-log.component';
import { VisitorsLogComponent } from './visitors-log/visitors-log.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmplNavbarComponent } from './empl-navbar/empl-navbar.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ViewEmployeeLeaveComponent } from './view-employee-leave/view-employee-leave.component';
import { ViewEmployeeLogComponent } from './view-employee-log/view-employee-log.component';
import { ViewSecEmpLogsComponent } from './view-sec-emp-logs/view-sec-emp-logs.component';
import { ViewSecVisLogComponent } from './view-sec-vis-log/view-sec-vis-log.component';
import { ViewAdminEmpLogComponent } from './view-admin-emp-log/view-admin-emp-log.component';
import { ViewAdminVisLogComponent } from './view-admin-vis-log/view-admin-vis-log.component';

const myRoute:Routes = [
  {
    path: "",
    component: AdminLoginComponent
  },
  {
    path:"addEmployee",
    component: AddEmployeeComponent
  },
  {
    path:"viewEmployee",
    component:ViewEmployeeComponent
  },
  {
    path: "editEmployee",
    component: EditEmployeeComponent
  },
  {
    path: "addSecurity",
    component: AddSecurityComponent
  },
  {
    path:"viewLeaves",
    component:HandleLeaveComponent
  },
  {
    path:"securityLogin",
    component:SecurityLoginComponent
  },
  {
    path:"viewSecurityProfile",
    component: ViewProfileComponent
  },
  {
    path:"employeeLog",
    component: CreateLogComponent
  },
  {
    path:"visitorLog",
    component: VisitorsLogComponent
  },
  {
    path:"employeeLogin",
    component: EmployeeLoginComponent
  },
  {
    path:"employeeProfile",
    component: EmployeeProfileComponent
  },
  {
    path:"applyLeave",
    component: ApplyLeaveComponent
  },  
  {
    path:"viewEmployeeLeave",
    component: ViewEmployeeLeaveComponent
  },
  {
    path:"viewEmployeeLog",
    component: ViewEmployeeLogComponent
  },
  {
    path:"viewSecEmpLog",
    component: ViewSecEmpLogsComponent
  },
  {
    path:"viewSecVisLog",
    component: ViewSecVisLogComponent
  },
  {
    path:"viewAdminEmpLog",
    component: ViewAdminEmpLogComponent
  },
  {
    path:"viewAdminVisLog",
    component: ViewAdminVisLogComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    AdminNavBarComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    AddSecurityComponent,
    HandleLeaveComponent,
    SecurityLoginComponent,
    ViewProfileComponent,
    SecurityNavComponent,
    CreateLogComponent,
    VisitorsLogComponent,
    EmployeeLoginComponent,
    EmployeeProfileComponent,
    EmplNavbarComponent,
    ApplyLeaveComponent,
    ViewEmployeeLeaveComponent,
    ViewEmployeeLogComponent,
    ViewSecEmpLogsComponent,
    ViewSecVisLogComponent,
    ViewAdminEmpLogComponent,
    ViewAdminVisLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
