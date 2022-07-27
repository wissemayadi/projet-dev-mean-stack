import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Centres } from '../_models/centres';

@Injectable({
  providedIn: 'root'
})
export class CentresService {
  private API_URL = environment.API_URL + 'centre';

  constructor(private http: HttpClient) {}

  getAllCentre(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  addCentre(centre: Centres): Observable<any> {
    return this.http.post(this.API_URL + '/create/', centre);
  }
  
 
  updateCentre(centre: Centres): Observable<any> {
    return this.http.put(
      this.API_URL + '/update/' + centre._id,
      centre
    );
  }

  deleteCentre(centre: Centres): Observable<any> {
    return this.http.delete(this.API_URL + '/delete/' + centre._id);
  }
}
