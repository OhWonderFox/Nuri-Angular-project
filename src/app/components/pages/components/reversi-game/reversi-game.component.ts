import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-reversi-game',
  templateUrl: './reversi-game.component.html',
  styleUrls: ['./reversi-game.component.css']
})
export class ReversiGameComponent {
  squares:any = []
  xIsNext = true;
  winner = '';
  counter = 0;
  isDraw = '';
  freshpage = true;

  constructor() { }

  ngOnInit(): void { }

  newGame() {
    this.squares = Array(64).fill(null);
    this.winner = '';
    this.isDraw = '';
    this.counter = 0;
    this.freshpage = false;
    this.xIsNext = true;
    this.squares[27] = 'W';
    this.squares[28] = 'B';
    this.squares[36] = 'W';
    this.squares[35] = 'B';
  }

  get player() {
    return this.xIsNext?'B':'W'
  }

  makeMove(idx:number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx,1,this.player)
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
  }

  

}
