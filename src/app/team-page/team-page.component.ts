import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CurrencyPipe, DatePipe, NgOptimizedImage} from "@angular/common";
import {TeamsService} from "../services/teams/teams.service";
import {Team} from "../models/team.interface";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    DatePipe,
    MatButton,
    RouterLink,
    MatIcon
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent implements OnInit{
  team: Team = {_id: "", name: "", players: [], thumbnail: "/link"} ;
  constructor(
    private route: ActivatedRoute,
    private teamSvc : TeamsService
    ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    if(teamId) this.teamSvc.getTeam(teamId).subscribe(res => {
      console.log(res.body);
      this.team = res.body;
    })
  }
}
