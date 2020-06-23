import { Component, OnInit } from '@angular/core';
import { ForseekerService } from '../../forseeker.service';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  profileinfo: any;
  EmpProfileForm: FormGroup;
  updated: any;
  userdata:any={};
  constructor(private router: Router, private fb: FormBuilder, private seekerservice: ForseekerService) { }

  ngOnInit() {
    this.getprofile();
    this.EmpProfileForm = this.fb.group({
      _id: this.seekerservice.getpayload().id,
      username: [''],
      password: ['', Validators.compose([Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"), Validators.minLength(8)])],
      mail: ['', Validators.compose([Validators.email])],
      gender: [''],
      mobile: [''],
      hometown: [''],
      interests: [''],
      experience: [''],
      maritalStatus: [''],
      nationality: [''],
      languages: [''],
      currentLocation: [''],
      lastjobexp: [''],
      lastjobDesig: [''],
      department: [''],
      reasonsforleaving: ['']
    });
  }
  getprofile() {
    this.seekerservice.getprofile().subscribe(
      (response: any) => {
        this.profileinfo = response;
        this.userdata=response;
        console.log(this.userdata);
        this.EmpProfileForm.patchValue({
          _id: this.seekerservice.getpayload().id,
          username: this.userdata.username,
          mail: this.userdata.mail,
          gender: this.userdata.gender,
          mobile: this.userdata.mobile,
          hometown: this.userdata.hometown,
          interests: this.userdata.interests,
          experience: this.userdata.experience,
          maritalStatus: this.userdata.maritalStatus,
          nationality: this.userdata.nationality,
          languages: this.userdata.languages,
          currentLocation: this.userdata.currentLocation,
          lastjobexp: this.userdata.lastjobexp,
          lastjobDesig: this.userdata.lastjobDesig,
          department: this.userdata.department,
          reasonsforleaving: this.userdata.reasonsforleaving
    
        });
        this.EmpProfileForm.setValue({
          password: this.userdata.password
        });

      }, (error) => {
        console.log("Server Error");
      }
    )
  }

  updateprofile() {
    //this.EmpProfileForm.patchValue({
    //   _id: this.seekerservice.getpayload().id,
    //   username: this.profileinfo.username,
    //   password: this.profileinfo.password,
    //   mail: this.profileinfo.mail,
    //   gender: this.profileinfo.gender,
    //   mobile: this.profileinfo.mobile,
    //   hometown: this.profileinfo.hometown,
    //   interests: this.profileinfo.interests,
    //   experience: this.profileinfo.experience,
    //   maritalStatus: this.profileinfo.maritalStatus,
    //   nationality: this.profileinfo.nationality,
    //   languages: this.profileinfo.languages,
    //   currentLocation: this.profileinfo.currentLocation,
    //   lastjobexp: this.profileinfo.lastjobexp,
    //   lastjobDesig: this.profileinfo.lastjobDesig,
    //   department: this.profileinfo.department,
    //   reasonsforleaving: this.profileinfo.reasonsforleaving

    // })
    // this.EmpProfileForm.patchValue({
    //   _id: this.seekerservice.getpayload().id,
    //   username: this.userdata.username,
    //   password: this.userdata.password,
    //   mail: this.userdata.mail,
    //   gender: this.userdata.gender,
    //   mobile: this.userdata.mobile,
    //   hometown: this.userdata.hometown,
    //   interests: this.userdata.interests,
    //   experience: this.userdata.experience,
    //   maritalStatus: this.userdata.maritalStatus,
    //   nationality: this.userdata.nationality,
    //   languages: this.userdata.languages,
    //   currentLocation: this.userdata.currentLocation,
    //   lastjobexp: this.userdata.lastjobexp,
    //   lastjobDesig: this.userdata.lastjobDesig,
    //   department: this.userdata.department,
    //   reasonsforleaving: this.userdata.reasonsforleaving

    // });
    this.seekerservice.Empupdateprofile(JSON.stringify(this.EmpProfileForm.value)).subscribe((response) => {

      this.updated = response;
     // localStorage.setItem('currentemployee',this.EmpProfileForm.value.username);
      //this.EmpProfileForm.setValue(response);
      this.router.navigate(['seeker/eprofile'])
      console.log(this.EmpProfileForm.value.username);
    },
      (error) => {
        console.log(error);
      })
  }
}
