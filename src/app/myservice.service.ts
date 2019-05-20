import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonModel } from './jsonmodel';
import { UserModel } from './usermodel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  // url = 'https://www.superheroapi.com/api.php/435853113652040/search';
  // url = 'http://103.87.58.128:1234/findhero/?name=';
    url = `http://localhost:1234/findhero?name=`;
  regurl = `http://localhost:1234/register`;
  logurl = `http://localhost:1234/login`;

  getcharacter(name): Observable<JsonModel[]> {
    return this.http.get<JsonModel[]>(this.url + name);
  }
  registerUser(userform): Observable<UserModel[]>{
  return this.http.post<UserModel[]>(this.regurl, userform, httpOptions);
  }
  loginUser(loginform): Observable<UserModel[]>{
    return this.http.post<UserModel[]>(this.logurl, loginform, httpOptions);
 }
}
