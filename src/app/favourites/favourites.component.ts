import { Component, OnInit } from '@angular/core';
import { ApixuService } from '../apixu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit{
  
  favouriteMovies: any[] = [];
  clickCount = 0;
  private subscription: Subscription;

  constructor(
    private apixuService: ApixuService
  ) {}

  ngOnInit() {
    this.favouriteMovies = JSON.parse(localStorage.getItem('favourites') || '[]');
  }

  unfavourite(title:any) {
    this.favouriteMovies = JSON.parse(localStorage.getItem('favourites') || '[]');
    this.favouriteMovies = this.favouriteMovies.filter(movie => movie.Title !== title);
    localStorage.setItem('favourites', JSON.stringify(this.favouriteMovies));
  }

  clearFavourites() {
    localStorage.clear();
    location.reload();
  }
}
