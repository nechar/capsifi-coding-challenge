import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/game.interfaces';
import { GameService } from 'src/app/services/games.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() game: Result;

  constructor(public gameService: GameService) {}
}
