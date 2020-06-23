import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {ForseekerService} from '../../forseeker.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
username:any;
searchform: FormGroup;
jobs:any=[];
headers=['Job Role','Experience','Job Type','PostedDate',''];
nojobs:any;
successmsg:boolean=false;
companymsg:boolean=false;
rolemsg:boolean=false;
latestmsg:boolean=false;
constructor(private router:Router,private fb:FormBuilder,private fservice:ForseekerService) { }

  ngOnInit() {
    this.username=localStorage.getItem('currentemployee');
    this.searchform=this.fb.group({
      searchdrop:[''],
      searchname:['']
    });
  }
  search()
  {
    let values=this.searchform.value;
    if(values.searchdrop=='companyname')
    {
      this.latestmsg=false;
      this.companymsg=true;
      this.rolemsg=false;
      let company_name=values.searchname;
      this.fservice.searchbycompany(company_name).subscribe(
        (response:any)=>{
          if(response.status && response.status==1)
          {
            this.jobs=response.jobs;
            this.successmsg=true;
          }
          else{
            this.successmsg=false;
            this.nojobs=response.message;
            console.log(response.message);
          }
         
        },(error)=>{
          console.log("Internal Server error");
        }
      )
    }
    else if(values.searchdrop=='Role')
    {
      this.latestmsg=false;
      this.companymsg=false;
      this.rolemsg=true;
      let job_role=values.searchname;
      this.fservice.searchbyrole(job_role).subscribe(
        (response:any)=>{
          if(response.length>0)
          {
            this.jobs=response;
            this.successmsg=true;
          }
          else{
            this.successmsg=false;
            this.nojobs="No jobs For this Role";
           // console.log(response.message);
          }
         
        },(error)=>{
          console.log("Internal Server error");
        }
      )
    }
    else{
      this.latestmsg=true;
      this.companymsg=false;
      this.rolemsg=false;
      this.fservice.searchlatestjobs().subscribe(
        (res:any)=>{
          this.jobs=res;
          this.successmsg=true;
        },(error)=>{
          console.log("Internal Server Error");
        }
      )
    }
  }

}
