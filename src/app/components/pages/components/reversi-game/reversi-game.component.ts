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

  getY(index: number) :number { return index / 8; }

  checkValidMove(player: string, x: number, y: number) : boolean {

    let turnedCount = 0;
    let j = 0;

    if(this.squares[this.getIndex(x,y)] == null){
      for(var i : number = x+1; i <= 7; i++){ //loop for right
        if(this.squares[this.getIndex(i,y)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(i,y)] == null || (this.squares[this.getIndex(i,y)] == !this.xIsNext && i == 7)){ turnedCount = 0;  }
      }
      for(var i : number = y+1; i <= 7; i++){ //loop for down
        if(this.squares[this.getIndex(x,i)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(x,i)] == null || (this.squares[this.getIndex(x,i)] == !this.xIsNext && i == 7)){ turnedCount = 0; }
      }
      for(var i : number = x-1; i >= 0; i--){ //loop for left
        if(this.squares[this.getIndex(i,y)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(i,y)] == null || (this.squares[this.getIndex(i,y)] == !this.xIsNext && i == 0)){ turnedCount = 0;  }
      }
      for(var i : number = x-1; i >= 0; i--){ //loop for up
        if(this.squares[this.getIndex(i,y)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(i,y)] == null || (this.squares[this.getIndex(i,y)] == !this.xIsNext && i == 0)){ turnedCount = 0; }
      }
      for(let i = x+1, j = y+1; i <= 7 && j<=7; i++, j++){ //loop right down diogonal
        if(this.squares[this.getIndex(i,j)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(i,j)] == null || (this.squares[this.getIndex(i,j)] == !this.xIsNext && i == 7 && j==7)){ turnedCount = 0;  }
      }
      for(let i = x-1, j = y+1; i >= 0 && j<=7; i--, j++){ //loop left down diogonal
        if(this.squares[this.getIndex(i,j)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(i,j)] == null || (this.squares[this.getIndex(i,j)] == !this.xIsNext && i == 0 && j==7)){ turnedCount = 0;  }
      }
      for(let i = x-1, j = y-1; i >= 0 && j>=0; i--, j--){ //loop left up diogonal
        if(this.squares[this.getIndex(i,j)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(i,j)] == null || (this.squares[this.getIndex(i,j)] == !this.xIsNext && i == 0 && j==0)){ turnedCount = 0;  }
      }
      for(let i = x+1, j = y-1; i <= 7 && j>=0; i++, j--){ //loop right up diogonal
        if(this.squares[this.getIndex(i,j)] == !this.xIsNext){ turnedCount ++; }
        else if(this.squares[this.getIndex(i,j)] == null || (this.squares[this.getIndex(i,j)] == !this.xIsNext && i == 7 && j==0)){ turnedCount = 0;  }
      }
    }  

  if(turnedCount > 0) { return true; }
  else { return false;}

  }

  makeMove(index:number) {
    if(!this.squares[index]) {
      this.squares.splice(index,1,this.player)
      this.xIsNext = !this.xIsNext;
    }
    console.log(this.squares[index]);
  }

}
