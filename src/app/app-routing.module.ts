import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', component: WelcomeComponent},
  { path: 'title', component: DescriptionComponent},
  { path: 'result', component: SearchResultsComponent},
  { path: 'favourites', component: FavouritesComponent}
  //{ path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
