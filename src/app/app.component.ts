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
  isExpanded = true;
  isShowing = false;

  games$: Observable<Games> = this.gameService.getAll();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}
}
