import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  public movie: any;
  public type: any;
  private buttonClickedSource = new Subject<void>();

  buttonClicked$ = this.buttonClickedSource.asObservable();

  constructor(
    private http: HttpClient,
    ) { }

  getMovie(movie: any, type: any) {
    return this.http.get(
      'http://www.omdbapi.com/?apikey=1a098455&t=' + movie + '&type=' + type
    );
  }

  setData(movie: any, type: any): void {
    this.movie = movie;
    this.type = type;
    this.buttonClickedSource.next();
  }

  getTitle() {
    return this.movie;
  }
  getType() {
    return this.type;
  }
}
