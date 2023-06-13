import { Component } from '@angular/core';
import { ApixuService } from "../apixu.service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public searchResults: any;
  public movieData: any;
  public movie: any;
  public type: any;

  clickCount = 0;
  private subscription: Subscription;

  constructor(
    private apixuService: ApixuService,
    private router: Router,
  ) {}

  getData() {
    this.movie = this.apixuService.getTitle();
    this.type = this.apixuService.getType();
    this.apixuService.getSearch(this.movie, this.type).subscribe(data => {
      this.movieData = Object.values(data);
      console.log(this.movieData);
    });
  }

  getMovie(title: any) {
    this.apixuService.getMovie(title, "movie");
    this.router.navigate(['/title']);
  }

}
