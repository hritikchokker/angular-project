import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonModel } from '../jsonmodel';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit {
  name = new FormControl('');
  jsonmodel: object[];
  results: object[];
  message: string;
  // result: string[];

  constructor(private _myservice: MyserviceService) { }
  ngOnInit() {
  }
    getchar(name: string){
    this._myservice.getcharacter(name)
    .subscribe((data) => {
      // console.log(this.data);
        this.jsonmodel = data as object [];
        console.log('hritik', this.jsonmodel);
          this.results = data["record"];
          console.log(this.results);
    });
    }

}

// console.log(`https://www.superheroapi.com/api.php/435853113652040/search/${name}`);
// console.log(results);

