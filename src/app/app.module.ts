import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DescriptionComponent } from './description/description.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchBarComponent,
    DescriptionComponent,
    SearchResultsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
