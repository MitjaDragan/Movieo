import { Component } from '@angular/core';
import { ApixuService } from "../apixu.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent{

  public movieData: any;
  public movie: any;
  public type: any;

  get genres(): string[] {
    return this.movieData.Genre.split(', ');
  }

  clickCount = 0;
  private subscription: Subscription;

  constructor(
    private apixuService: ApixuService
  ) {
    this.subscription = this.apixuService.buttonClicked$.subscribe(() => {
      this.clickCount++;
      this.getData();
    });
  }

  getData() {
    this.movie = this.apixuService.getTitle();
    this.type = this.apixuService.getType();
    this.apixuService.getMovie(this.movie, this.type).subscribe(data => {
      this.movieData = data;
    });
  }

  addMovieToFavourites() {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    favourites.push(this.movieData);
    console.log(favourites);
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }

  
  
}
