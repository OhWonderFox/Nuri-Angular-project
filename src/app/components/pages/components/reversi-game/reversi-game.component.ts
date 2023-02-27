import { Component, ComponentFactoryResolver } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

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

  getIndex(x: number, y: number) : number{ return  y * 8 + x; }

  getX(index: number) :number { return index % 8; }

  getY(index: number) :number { return Math.floor(index / 8); }

  checkMoveAnyDirection(player: string, x: number, y: number, incX: number, incY: number) : number {

    let turnedCount = 0;
    let newX = x + incX;
    let newY = y+incY;
    let opponent = player === 'W' ? 'B' : 'W';

    while(true){
      let sqare = this.squares[this.getIndex(newX,newY)];
      if(newX > 7 || newY > 7 || newX < 0 || newY < 0){ turnedCount = 0; break; }
      else if(sqare === player){ break; }
      else if(sqare === opponent){ turnedCount ++; }
      else if(sqare === null){ turnedCount = 0; break; }
      newX+= incX;
      newY+= incY;
    }

  return turnedCount;

  }

  makeMove(index:number) {
    if(!this.squares[index]) {
      if(this.squares[index] === null){
        this.counter = this.checkMoveAnyDirection(this.squares[index], this.getX(index), this.getY(index), -1, 0);
      }
      if(this.counter > 0){ 
        this.squares.splice(index,1,this.player);
        this.xIsNext = !this.xIsNext;
      }
    }
    
    console.log(this.squares[index]);
  }

}
