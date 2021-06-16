import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/games.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}
}
