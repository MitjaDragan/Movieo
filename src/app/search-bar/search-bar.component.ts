import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  searchTerm: string;

  public searchResults: any[] = [];
  public movieSearchForm: FormGroup;

  @ViewChild('reference') reference: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.movieSearchForm = this.formBuilder.group({
      movie: [""],
      type: [""]
    });
  }

  getData(search: any) {
    this.reference.nativeElement.value = '';
    this.searchResults = [];
    this.cdr.detectChanges();
    this.apixuService.getMovie(search, 'movie');
    const timestamp = new Date().getTime();
    this.router.navigate(['/title'], { queryParams: { timestamp: timestamp } });
  }

  submitSearch() {
    this.reference.nativeElement.value = '';
    this.reference.nativeElement.blur();
    this.searchResults = [];
    this.cdr.detectChanges();
    this.apixuService.getMovie(this.searchTerm, 'movie');
    const timestamp = new Date().getTime();
    this.router.navigate(['/result'], { queryParams: { timestamp: timestamp } });
  }

  searchMovies() {
    if (this.searchTerm && this.searchTerm.length >= 3) {
      this.http.get(`http://www.omdbapi.com/?apikey=1a098455&s=` + this.searchTerm).subscribe(data => {
        this.searchResults = Object.values(data);
      });} else {
      this.searchResults = [];
    }
  }

}
