import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import {Router} from '@angular/router';
import { NavbarStatusService } from '../navbar-status.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userModel: object[];
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _myservice: MyserviceService, private router: Router) { }
  status: boolean;
  results: [];
  ngOnInit() {  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this._myservice.loginUser(this.loginForm.value)
    .subscribe((data) => {
      this.userModel = data as object[];
      console.log(this.userModel);
      this.results = data['record'];
      if(this.results){
        this.router.navigate(['/dashboard']);
      } else {
        console.log('please enter valid email');
        alert('enter valid email');
      }
    });
    console.log(this.loginForm.value);
  }
  // notoggle() {
  //   NavbarStatusService.status = true;
  //   this.status = NavbarStatusService.status;
  // }
  // toggleMethod() {
  //   NavbarStatusService.status = false;
  //   this.status = NavbarStatusService.status;
  // }
}
