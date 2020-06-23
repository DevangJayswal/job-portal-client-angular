import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './seeker/dashboard/dashboard.component';
import {RdashboardComponent} from './recruiter/rdashboard/rdashboard.component';
import {PostedjobsComponent} from './recruiter/rdashboard/postedjobs/postedjobs.component';
import { AppliedEmployeesComponent} from './recruiter/rdashboard/applied-employees/applied-employees.component';
import { JobsComponent } from './seeker/dashboard/jobs/jobs.component';
import { AppliedjobsComponent } from './seeker/dashboard/appliedjobs/appliedjobs.component';
import {LoginComponent} from './Auth/login/login.component';
import {EmpProfileComponent} from './seeker/emp-profile/emp-profile.component';
import {RprofileComponent} from './recruiter/rprofile/rprofile.component';
import { EmploginComponent } from './Auth/login/emplogin/emplogin.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { RegisComponent } from './Auth/regis/regis.component';
import { EmpregisterComponent } from './Auth/regis/empregister/empregister.component';
import {PostjobComponent} from './recruiter/postjob/postjob.component';
import { RecruiterregisterComponent } from './Auth/regis/recruiterregister/recruiterregister.component';
import {EditprofileComponent} from './seeker/editprofile/editprofile.component';
import {SearchComponent} from './seeker/search/search.component';
const routes: Routes = [
  {path:'',redirectTo:'login/emp_login',pathMatch:'full'}, 
  //for default pageload..
  //pathmatch can be "prefix" or "full"..
  //when path is empty we use "full",if we want to add to some prefix we then equalise pathMatch="prefix"
  {path:'login',component:LoginComponent,children:[
    {path:'emp_login',component:EmploginComponent},
    {path:'rec_login',component:RecruiterloginComponent}
  ]},
  {path:'register',component:RegisComponent,children:[
    {path:'emp_register',component:EmpregisterComponent},
    {path:'rec_register',component:RecruiterregisterComponent}
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
  {path:'jobs',component:JobsComponent},
  {path:'appliedjobs',component:AppliedjobsComponent}, 
  ]},
  {path:'rdashboard',component:RdashboardComponent,children:[
    {path:'postedjobs',component:PostedjobsComponent},
    {path:'applied',component:AppliedEmployeesComponent}, 
    
    ]},
  {path:'seeker/eprofile',component:EmpProfileComponent},
  {path:'seeker/editprofile',component:EditprofileComponent},
  {path:'recruiter/rprofile',component:RprofileComponent},
  {
    path:'seeker/search',component:SearchComponent
  },
  {
    path:'recruiter/postjob',component:PostjobComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegisComponent,
                                EmpregisterComponent,
                                RecruiterregisterComponent,
                                JobsComponent,
                                AppliedjobsComponent,
                                DashboardComponent,
                                LoginComponent,
                                EmploginComponent,
                                RecruiterloginComponent,
                                EmpProfileComponent,
                                RdashboardComponent,
                                PostedjobsComponent,
                                AppliedEmployeesComponent,
                                RprofileComponent,
                                PostjobComponent,
                                EditprofileComponent,
                                SearchComponent
                              ];
