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
  selector: 'app-tvshow-search',
  templateUrl: './tvshow-search.component.html',
  styleUrls: ['./tvshow-search.component.css']
})
export class TvshowSearchComponent implements OnInit {
  name = '';
  season: number;
  episode: number;
  url = '';

  clickShow(name: string ,season: number, episode: number){
    this.name = name;
    this.season = season;
    this.episode = episode;
    this.url = `https://api.odb.to/embed?title=${name}&s=${season}&e=${episode}`;
    console.log(name, season, episode);
    console.log(this.url);
  }
  constructor() { }

  ngOnInit() {
  }

}
