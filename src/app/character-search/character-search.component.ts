import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { HttpClient,HttpParams } from '@angular/common/http';
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
  result: string[];

  constructor(private _myservice: MyserviceService) { }
  ngOnInit() {
  }
    getchar(name: string){
    this._myservice.getcharacter(name)
    .subscribe((data) => {
        this.jsonmodel = data as object [];
        console.log(this.jsonmodel);
        this.results = data["results"];
        console.log(this.results);
    });
    }

}

// console.log(`https://www.superheroapi.com/api.php/435853113652040/search/${name}`);
// console.log(results);

