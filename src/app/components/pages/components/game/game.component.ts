import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  squares:any = []
  xIsNext = true;
  winner = '';
  counter = 0;
  isDraw = '';
  freshpage = true;

  constructor() { }

  ngOnInit(): void { }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isDraw = '';
    this.counter = 0;
    this.freshpage = false;
  }

  get player() {
    return this.xIsNext?'X':'O'
  }

  makeMove(idx:number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx,1,this.player)
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
  }
}
