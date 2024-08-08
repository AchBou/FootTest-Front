import {Component, OnInit} from '@angular/core';
import {LeaguesService} from "../services/leagues/leagues.service";
import {SearchbarComponent} from "../components/searchbar/searchbar.component";
import {League} from "../models/league.interface";
import {Team} from "../models/team.interface";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    SearchbarComponent,
    NgOptimizedImage,
    RouterLink,
    MatButton,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit {
  leagues: League[] = []
  leagueNames: string [] = []
  teams: Team[] = []
  constructor(private leagueSvc : LeaguesService) {
  }

  ngOnInit() {
    this.leagueSvc.getAllLeagues().subscribe(res => {
      this.leagues = res.body
      this.leagueNames = this.leagues.map(league => league.name)
    });
  }

  loadTeams(target: string) {
    const leagueId : string | undefined = this.leagues.find(league => league.name === target)?._id
    if (leagueId) this.leagueSvc.getLeagueTeams(leagueId).subscribe(res => {
      console.log(res.body)
      this.teams = res.body.teams
    })
    else {
      //TODO: Error message
      console.log('error : no team found');
      this.teams = [];
    }
  }
}
