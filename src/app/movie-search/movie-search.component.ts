import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  name = '';
  url = '';
  year ;
  myclick(name: string, year: number){
    this.name = name;
    this.year = year;
    this.url = `https://api.odb.to/embed?title=${name}&year=${year}`;
    console.log(name, year);
    console.log(this.url);
  }

  constructor() { }

  ngOnInit() {
  }

}
