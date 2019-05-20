import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
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

  constructor(private fb: FormBuilder, private _myservice: MyserviceService) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this._myservice.loginUser(this.loginForm.value)
    .subscribe((data)=>{
      this.userModel = data as object[];
      console.log(this.userModel);
    });
    console.log(this.loginForm.value);
  }
}
