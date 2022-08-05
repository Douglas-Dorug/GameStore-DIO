import { Component, OnInit } from '@angular/core';
import { Game } from './model/Game';
import { GameService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  games: any = [];
  gameService : GameService;
  gamesOk : Game[]=[
    { id: '1', name: 'Game1' , price: 10, quantity: 1, category: "Acao", img:"darkSouls"},
    { id: '2', name: 'Game2' , price: 10, quantity: 1, category: "Acao", img:"bloodBorne"},
    { id: '3', name: 'Game3' , price: 10, quantity: 1, category: "Acao", img:"demonSouls"},
  ]
  constructor( gameService : GameService) {
    this.gameService = gameService;
   }

  ngOnInit(): void {
    this.games = this.gameService.getGames().subscribe((data => {
      this.games = data;
      console.log(this.games)
    }))
  }

}
