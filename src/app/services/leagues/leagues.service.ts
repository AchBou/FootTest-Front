import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private basepath = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  public getAllLeagues(): Observable<any> {
   return this.http.get(this.basepath + '/leagues', {observe: 'response'});
  }
  public getLeagueTeams(leagueId: string): Observable<any> {
    return this.http.get(this.basepath + '/leagues/' + leagueId, {observe: 'response'});
  }

}
