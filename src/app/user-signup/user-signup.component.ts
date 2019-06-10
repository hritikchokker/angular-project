import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { NavbarStatusService } from '../navbar-status.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  userModel: object[];
  results: [];
  message: string;
  registerForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private _myservice: MyserviceService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this._myservice.registerUser(this.registerForm.value)
    .subscribe((data) => {
      this.userModel = data as object[];
      this.router.navigate(['/login']);
      console.log(this.userModel);
       // this.results = data['message'];
    });
    console.log(this.registerForm.value);
  }

}
