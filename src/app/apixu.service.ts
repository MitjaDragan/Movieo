import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  public movie: any;
  public type: any;
  public search: any;

  constructor(
    private http: HttpClient,
    ) { }

  getSearch(movie: any, type: any) {
    window.alert(movie);
    return this.http.get(
      'http://www.omdbapi.com/?apikey=1a098455&s=' + movie
    );
  }

  getMovie(search: any, type: any) {
    this.movie = search;
    return this.http.get(
      'http://www.omdbapi.com/?apikey=1a098455&t=' + search
    );
  }

  setData(movie: any, type: any): void {
    this.movie = movie;
    this.type = type;
  }

  getData(search: any): void {
    this.search = search;
  }

  getTitle() {
    return this.movie;
  }
  getType() {
    return this.type;
  }
  searchGet() {
    return this.search;
  }
}
