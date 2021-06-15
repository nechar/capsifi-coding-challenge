import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Games } from '../interfaces/game.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Games> {
    return this.httpClient.get(
      `${environment.baseUrl}/collections/must-play/games`
    ) as Observable<Games>;
  }
}
