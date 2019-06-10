import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavbarStatusService } from '../navbar-status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: boolean;
  constructor() { }


  ngOnInit() {
    this.status = NavbarStatusService.status;
     }
     toggleMethod(){
       NavbarStatusService.status = true;
       this.status = NavbarStatusService.status;
     }
     notoggle(){
       NavbarStatusService.status = false;
       this.status = NavbarStatusService.status;
     }
}
