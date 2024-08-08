import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private basepath = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  public getAllTeams(): Observable<any> {
    return this.http.get(this.basepath + '/teams', {observe: 'response'});
  }

  public getTeam(teamId: string): Observable<any> {
    return this.http.get(this.basepath + '/teams/' + teamId, {observe: 'response'});
  }
}
