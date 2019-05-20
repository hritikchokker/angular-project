import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  userModel: object[];
  registerForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private _myservice: MyserviceService) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this._myservice.registerUser(this.registerForm.value)
    .subscribe((data) => {
      this.userModel = data as object[];
      console.log(this.userModel);
    })
    console.log(this.registerForm.value);
  }

}
