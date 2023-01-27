import { Component, ComponentFactoryResolver } from '@angular/core';

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
    this.xIsNext = true;
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
  
    this.checkWinner();

    if(!this.winner && this.counter == 9) {
      this.newGame();
    }

  }

  checkIndicesEqual(val: string, idx1: number, idx2: number, idx3: number): boolean{

      return (this.squares[idx1] === val && this.squares[idx2] === val && this.squares[idx3] === val);
  }

  checkFor3(val: string): boolean {
    return (this.checkIndicesEqual(val, 0,1,2) || 
         this.checkIndicesEqual(val, 3,4,5) || 
         this.checkIndicesEqual(val, 6,7,8) ||
         this.checkIndicesEqual(val, 0,3,6) ||
         this.checkIndicesEqual(val, 1,4,7) ||
         this.checkIndicesEqual(val, 2,5,8) ||
         this.checkIndicesEqual(val, 0,4,8) ||
         this.checkIndicesEqual(val, 2,4,6) ) 
  }

  checkWinner(){
    if(this.checkFor3('X') === true ){
      this.winner = 'X';
    }
    else if(this.checkFor3('O') === true){
      this.winner = 'O';
    }
  }
}
