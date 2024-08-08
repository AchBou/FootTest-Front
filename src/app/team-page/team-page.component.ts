import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CurrencyPipe, DatePipe, NgOptimizedImage} from "@angular/common";
import {TeamsService} from "../services/teams/teams.service";
import {Player} from "../models/player.interface";
import {Team} from "../models/team.interface";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    DatePipe,
    MatButton,
    RouterLink
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent implements OnInit{
  teamName: string = ''
  players: Player [] = []
  constructor(
    private route: ActivatedRoute,
    private teamSvc : TeamsService
    ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    if(teamId) this.teamSvc.getTeam(teamId).subscribe(res => {
      console.log(res.body);
      this.teamName = res.body.name;
      this.players = res.body.players;
    })
  }
}
