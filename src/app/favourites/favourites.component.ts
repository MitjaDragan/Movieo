import { Component } from '@angular/core';
import { ApixuService } from '../apixu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})


export class FavouritesComponent{
  
  favouriteMovies: any[] = [];
  clickCount = 0;
  private subscription: Subscription;

  constructor(
    private apixuService: ApixuService
  ) {
    this.subscription = this.apixuService.buttonClicked$.subscribe(() => {
      this.clickCount++;
      this.getFavouritesFromLocalStorage();
    });
  }

  getFavouritesFromLocalStorage() {
    this.favouriteMovies = JSON.parse(localStorage.getItem('favourites') || '[]');
  }

}
