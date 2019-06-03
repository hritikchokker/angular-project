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
  imdb = '';
  season: number;
  episode: number;
  url = '';

  clickShow(imdb: string ,season: number, episode: number){
    this.imdb = imdb;
    this.season = season;
    this.episode = episode;
    this.url = `https://videospider.stream/personal?key=NaEz1tk4YsAcYvbX&video_id=${imdb}&tv=2&s=${season}&e=${episode}`;
    console.log(name, season, episode);
    console.log(this.url);
  }
  constructor() { }

  ngOnInit() {
  }

}
