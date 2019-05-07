import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonModel } from './jsonmodel';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  url = 'https://www.superheroapi.com/api.php/435853113652040/search';

  getcharacter(name): Observable<JsonModel[]> {
    return this.http.get<JsonModel[]>(this.url + '/' + name);
  }
}
