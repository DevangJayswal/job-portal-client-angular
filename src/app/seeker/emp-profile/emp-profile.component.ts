import { Component, OnInit } from '@angular/core';
import { ForseekerService } from '../../forseeker.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  profileinfo: any;
  profilepic: any;
  picexists: boolean = false;
  successmsg: any;
  constructor(private seekerservice: ForseekerService, private router: Router) { }

  ngOnInit() {
    this.getprofile();

  }
  getprofile() {
    this.seekerservice.getprofile().subscribe(
      (response: any) => {
        this.profileinfo = response;
        //console.log(JSON.stringify(response.profileimage));
        let image:any = response.profileimage;
        //console.log(image);
        if (image != "") {
          this.picexists = true;
        }
        else {
          this.picexists = false;
        }

      }, (error) => {
        console.log("Server Error");
      }
    )
  }
  logout() {
    this.seekerservice.logout();
    this.router.navigate(['login/emp_login']);
  }
  selectimage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profilepic = file;
    }
  }
  upload() {
    const formdata = new FormData();
    formdata.append('profileimage', this.profilepic);
    this.seekerservice.uploadprofilepic(formdata).subscribe((res) => {
      if (res) {
        this.successmsg = res
      }
      setTimeout(() => {
        this.successmsg = '';
        this.getprofile();
      }, 2000);

      // setTimeout(()=>{
      //   this.router.navigate(['/seeker/eprofile'])
      // },1000);
      this.router.navigate(['seeker/eprofile']);
    }, (error) => {
      if (error) {
        console.log(error);
      }
    })
  }

}
