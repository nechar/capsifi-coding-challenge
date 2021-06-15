import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from './interfaces/game.interfaces';
import { GameService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  games$: Observable<Games> = this.gameService.getAll();

  myLikedGames: number[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

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
