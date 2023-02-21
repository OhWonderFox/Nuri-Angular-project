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
  }

  get player() {
    return this.xIsNext?'W':'B'
  }

  makeMove(idx:number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx,1,this.player)
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
  
    this.checkWinner();

  }

  checkIndicesEqual(): boolean{

     return true;
  }

  checkFor3(val: string): boolean {
    return true;
  }

  checkWinner(){
  }
}
