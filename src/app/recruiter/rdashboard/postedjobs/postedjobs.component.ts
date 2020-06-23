import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{ForrecruiterService} from '../../../forrecruiter.service';
@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css']
})
export class PostedjobsComponent implements OnInit {
  headers=['Job Role','Experience','Job Type','PostedDate',''];
  posted:any =[];
  nojobs:any;
  totaljobs:any;
  errormsg:any;
  successmsg:boolean=false;
  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:ForrecruiterService) { }

  ngOnInit() {
    this.postedjobs();
  }
  postedjobs()
  {
    this.recservice.getpostedjobs().subscribe(
      (response:any)=>{
        if(response.status && response.status==1){
        console.log(response);
        this.posted=response.data;
        this.totaljobs=response.data.length;
        this.successmsg=true;
        }
        
      else{
        console.log(response);
        this.nojobs=response.message;
        console.log(response.length);
        
        //console.log(this.applied);
      }
    },(error)=>{
      this.errormsg=error;
    }
    )
  }
}
