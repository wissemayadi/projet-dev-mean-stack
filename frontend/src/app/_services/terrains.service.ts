import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Terrains } from '../_models/terrains';

@Injectable({
  providedIn: 'root'
})
export class TerrainsService {
  private API_URL = environment.API_URL + 'terrain';

  constructor(private http: HttpClient) {}

  getAllTerrain(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  addTerrain(terrain: Terrains): Observable<any> {
    return this.http.post(this.API_URL + '/create/', terrain);
  }
  
 
  updateTerrain(terrain: Terrains): Observable<any> {
    return this.http.put(
      this.API_URL + '/update/' + terrain._id,
      terrain
    );
  }
  terrainName(terrain: Terrains): Observable<any> {
    return this.http.get(
      this.API_URL + '/name/' + terrain._id
      
    );
  }

  deleteTerrain(terrain: Terrains): Observable<any> {
    return this.http.delete(this.API_URL + '/delete/' + terrain._id);
  }
}
