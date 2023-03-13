import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public movieSearchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService,
  ) {}

  ngOnInit() {
    this.movieSearchForm = this.formBuilder.group({
      movie: [""],
      type: [""]
    });
  }

  setData(formValues: any) {
    this.apixuService.setData(formValues.movie, formValues.type);
  }
}
