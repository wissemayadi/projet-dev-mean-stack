import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../_models/Team";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  api_url = 'http://localhost:5000/api/equipes';
  constructor(private http: HttpClient) {
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.api_url);
  }

  getOneById(id: any): Observable<Team> {
    return this.http.get<Team>(this.api_url +  `/${id}`);
  }
  create(equipe: Team): Observable<any> {
    return this.http.post<any>(this.api_url , JSON.stringify(equipe));
  }
  edit(equipe: Team): Observable<any> {
    return this.http.put<any>(this.api_url + `/${equipe._id}`, equipe);
  }

  remove(equipeId: number | undefined): Observable<any> {
    return this.http.delete(this.api_url +`/${equipeId}`);
  }
    count(): Observable<number> {
        return this.http.get<number>(this.api_url + '/equipes/number');
    }
}
