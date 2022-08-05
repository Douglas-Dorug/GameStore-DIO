import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Game } from "./model/Game";

export const games: Game[] = [
  { id: '1', name: 'Game1' , price: 10, quantity: 1, category: "Acao", img:"darkSouls"},
  { id: '2', name: 'Game2' , price: 10, quantity: 1, category: "Acao", img:"bloodBorne"},
  { id: '3', name: 'Game3' , price: 10, quantity: 1, category: "Acao", img:"demonSouls"},

];

@Injectable()

export class GameService{
  private url = 'https://localhost:44382/api/bookstore';  // URL to web api da live

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getGames() {
      return this.http.get(this.url)

    }
}
