import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Player} from "../_models/Player";


@Injectable({
  providedIn: 'root'
})
export class PlayerServiceHttp {
   api_url = 'http://localhost:5000/api/members';
  constructor(private http: HttpClient) {
  }

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.api_url);
  }

  getOneById(id: number): Observable<Player> {
    return this.http.get<Player>(this.api_url +  `/${id}`);
  }
  create(player: Player): Observable<any> {
    return this.http.post<any>(this.api_url , JSON.stringify(player));
  }
  edit(player: Player): Observable<any> {
    return this.http.put<any>(this.api_url + `/${player._id}`, player);
  }

  remove(playerId: number | undefined): Observable<any> {
    return this.http.delete(this.api_url +`/${playerId}`);
  }
  getBySquadId(id: number): Observable<Player[]> {
    return this.http.get<Player[]>(this.api_url +  `/getBySquadId/${id}`);
  }
    count(): Observable<number> {
        return this.http.get<number>(this.api_url + '/number');
    }

}
