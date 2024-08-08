import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LeaguesService} from "../services/leagues/leagues.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private leagueSvc : LeaguesService) {
    this.leagueSvc.getAllLeagues();
  }
}
