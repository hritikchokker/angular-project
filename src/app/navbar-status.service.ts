import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarStatusService {
  static status = false;



  constructor() { }
}
