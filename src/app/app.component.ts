import { Component, OnInit } from '@angular/core';
import { Games } from './interfaces/game.interfaces';
import { GameService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isExpanded = true;
  isShowing = false;

  games: Games;

  constructor(private gameService: GameService) {}

  async ngOnInit(): Promise<void> {
    this.games = await this.gameService.getAll();
  }
}
