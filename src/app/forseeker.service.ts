import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment } from '../environments/environment';

const PRIVATE='https://naukaries.herokuapp.com/private/';
const PUBLIC='https://naukaries.herokuapp.com/public/';
@Injectable({
  providedIn: 'root'
})
export class ForseekerService {
 
  constructor(private httpCli:HttpClient) { }
  
  login(body:any){
    return this.httpCli.post(`${PUBLIC}employee/login`,body
    ,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  employee_register(body:any){
    return this.httpCli.post(`${PUBLIC}addemployee`,body,
    {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    }
    );
  }
  getjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    console.log(httpOptions);
    return this.httpCli.get(`${PRIVATE}employees/getjobs/${this.getpayload().id}`,httpOptions);
  }
  searchbycompany(companyname)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}employees/companyname/${companyname}`,httpOptions);
  }
  searchbyrole(jobrole:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}employees/jobrole/${jobrole}`,httpOptions);
  }
  searchlatestjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}employees/latest`,httpOptions);
  }
   applyjob(jobs:any)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer'+' '+this.gettoken()
      })
    };
    let job_id:any=jobs.jobDetails._id;
    let emp_id:any=this.getpayload().id;
    return this.httpCli.get(`${PRIVATE}employees/apply/${emp_id}/${job_id}`,httpOptions);
  }
  getappliedjobs()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.gettoken()
      })
    };
    return this.httpCli.get(`${PRIVATE}employees/appliedlist/${this.getpayload().username}`,httpOptions);
  }
  uploadprofilepic(fd:any)
  {
    return this.httpCli.post(`${PRIVATE}employee/uploadpicture/${this.getpayload().id}`,fd);
   
  }
gettoken()
{
  return localStorage.getItem('token');
}
getpayload()
{
  let token=this.gettoken();
  return JSON.parse(window.atob(token.split('.')[1])); 
}
Empupdateprofile(body:any)
{
  return this.httpCli.put(`${PRIVATE}employees/editprofile`,body,
  {
    
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    
  });
}
getprofile()
{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer${this.gettoken()}`
    })
  };
  return this.httpCli.get(`${PRIVATE}employees/profile/${this.getpayload().id}`,httpOptions);
}
logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('currentemployee');
  localStorage.removeItem('currentemployeeid')
}
}
