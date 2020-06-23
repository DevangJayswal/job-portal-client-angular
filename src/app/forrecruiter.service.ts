import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const PRIVATE='https://naukaries.herokuapp.com/private/';
const PUBLIC='https://naukaries.herokuapp.com/public/';
@Injectable({
  providedIn: 'root'
})
export class ForrecruiterService {

constructor(private httpCli:HttpClient) { }
  login(body:any){
    return this.httpCli.post(`${PUBLIC}recruiter/login`,body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  recruiter_register(body:any){
    return this.httpCli.post(`${PUBLIC}addrecruiter`,body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
//   getjobs()
//   {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Accept': 'application/json, text/plain, */*',
//          'Content-Type':'application/json',
//         'Authorization': 'Bearer '+this.gettoken()
//       })
//     };
//     console.log(httpOptions);
//     return this.httpCli.get(`${PRIVATE}employees/getjobs/${this.getpayload().id}`,httpOptions);
//   }
//    applyjob(jobs:any)
//   {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':'application/json',
//         'Authorization': 'Bearer'+' '+this.gettoken()
//       })
//     };
//     let job_id:any=jobs.jobDetails._id;
//     let emp_id:any=this.getpayload().id;
//     return this.httpCli.get(`${PRIVATE}employees/apply/${emp_id}/${job_id}`,httpOptions);
//   }
  getpostedjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}recruiters/jobs/${this.getpayload().id}`,httpOptions);
  }
  getseekers()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}recruiters/seekers/${this.getpayload().id}`,httpOptions);
  }
gettoken()
{
  return localStorage.getItem('token');
}
postjob(body:any)
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.gettoken()
    })
  };
  return this.httpCli.post(`${PRIVATE}recruiters/addjob`,body,httpOptions);
}
getpayload()
{
  let token=this.gettoken();
  return JSON.parse(window.atob(token.split('.')[1])); 
}
// getprofile()
// {
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':'application/json',
//       'Authorization': `Bearer${this.gettoken()}`
//     })
//   };
//   return this.httpCli.get(`${PRIVATE}employees/profile/${this.getpayload().id}`,httpOptions);
// }
logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('currentrecruiter');
  // localStorage.removeItem('currentemployeeid')
}
}


