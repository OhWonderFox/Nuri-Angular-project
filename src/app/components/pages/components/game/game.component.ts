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

  checkIndicesEqual(){

    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    for(let i=0;i<wins.length;i++) {
      const [idx1,idx2,idx3] = wins[i];
      if(this.squares[idx1] && this.squares[idx1] === this.squares[idx2] && this.squares[idx1] === this.squares[idx3]){
        return this.squares[idx1];
      }
    }
    return null;
  }

  checkFor3(val: string): boolean {
    if(this.checkIndicesEqual() === val){
      return true;
    }
      return false;
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
