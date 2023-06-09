import { Component, OnInit } from '@angular/core';
import { ApixuService } from "../apixu.service";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit{

  public movieData: any;
  public movie: any;
  public type: any;

  get genres(): string[] {
    return this.movieData.Genre.split(', ');
  }

  clickCount = 0;
  private subscription: Subscription;

  constructor(
    private apixuService: ApixuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const timestamp = params['timestamp'];
      if (timestamp) {
        this.getData();   
      }
    });
  }

  getData() {
    this.movie = this.apixuService.getTitle();
    this.type = this.apixuService.getType();
    this.apixuService.getMovie(this.movie, this.type).subscribe(data => {
      this.movieData = data;
      console.log(this.movieData);
    });
  }

  addMovieToFavourites() {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    favourites.push(this.movieData);
    localStorage.clear();
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }

}
