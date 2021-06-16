import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Games, Result } from '../interfaces/game.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private httpClient: HttpClient) {}

  results: Result[] = [];
  myLikedGames: number[] = [];

  async getAll(): Promise<Games> {
    const games: Games = (await this.httpClient
      .get(`${environment.baseUrl}/collections/must-play/games`)
      .toPromise()) as Games;
    this.results = games.results as Result[];
    return games;
  }

  findById(id: number): Result {
    return this.results.find((game) => game.id === id);
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
