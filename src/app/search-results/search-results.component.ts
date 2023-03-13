import { Component } from '@angular/core';
import { ApixuService } from "../apixu.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public movieData: any;
  public movie: any;
  public type: any;

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
}
