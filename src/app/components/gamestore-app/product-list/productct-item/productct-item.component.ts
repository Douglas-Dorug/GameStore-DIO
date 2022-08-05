import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model/Game';

@Component({
  selector: 'app-productct-item',
  templateUrl: './productct-item.component.html',
  styleUrls: ['./productct-item.component.css']
})
export class ProductctItemComponent implements OnInit {
  url: string = "";

  @Input()
  game!: Game;
  constructor() { }

  ngOnInit(): void {
  }

}
