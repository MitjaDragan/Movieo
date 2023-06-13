import { Component, OnInit } from '@angular/core';
import { ApixuService } from "../apixu.service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{

  public Results: any;
  public movieData: any;
  public movie: any;
  public type: any;

  clickCount = 0;
  private subscription: Subscription;

  constructor(
    private apixuService: ApixuService,
    private router: Router,
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
