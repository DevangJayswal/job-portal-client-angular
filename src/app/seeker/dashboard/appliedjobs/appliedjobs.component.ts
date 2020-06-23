import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{ForseekerService} from '../../../forseeker.service';
@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit {
  headers=['Company Name','Job Role','Job Type','Experience',''];
applied:any =[];
nojobs:any;
errormsg:any;
successmsg:boolean;
constructor(private router:Router,private activeroute:ActivatedRoute,private seekerservice:ForseekerService) { }

  ngOnInit() {
    this.appliedjobs();
  }
  appliedjobs()
  {
    this.seekerservice.getappliedjobs().subscribe(
      (response:any)=>{
        if(response.status && response.status===1)
        this.nojobs=response.message;
      else{
        this.applied=response;
        this.successmsg=true;
        //console.log(this.applied);
      }
    },(error)=>{
      this.errormsg=error;
    }
    )
  }

}
