import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import {TeamPageComponent} from "./team-page/team-page.component";

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'team/:id',
    component: TeamPageComponent,
  },
];
