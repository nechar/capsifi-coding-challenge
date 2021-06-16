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

  myLikedGames: number[] = [];

  getAll(): Observable<Games> {
    return this.httpClient.get(
      `${environment.baseUrl}/collections/must-play/games`
    ) as Observable<Games>;
  }

  toggleLike(id: number): void {
    const index = this.myLikedGames.indexOf(id);
    if (index === -1) {
      this.myLikedGames.push(id);
    } else {
      this.myLikedGames.splice(index, 1);
    }
  }

  isLiked(id: number): boolean {
    const index = this.myLikedGames.indexOf(id);
    return index !== -1;
  }

  dislike(id: number): void {
    const index = this.myLikedGames.indexOf(id);
    if (index !== -1) {
      this.myLikedGames.splice(index, 1);
    }
  }
}
