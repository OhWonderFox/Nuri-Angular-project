import { Component, ComponentFactoryResolver } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-reversi-game',
  templateUrl: './othello-game.component.html',
  styleUrls: ['./othello-game.component.css']
})
export class ReversiGameComponent {
  squares:any = []
  winner = '';
  counterW = 0;
  counterB = 0;
  isDraw = '';
  freshpage = true;
  player = '';
  cWhite = 0;
  cBlack = 0;

  constructor() { }

  ngOnInit(): void { 
    this.newGame();

  }

  newGame() {
    this.squares = Array(64).fill(null);
    this.winner = '';
    this.isDraw = '';
    this.counterW = 0;
    this.counterB = 0;
    this.freshpage = false;
    this.player = 'B';
    this.squares[27] = 'W';
    this.squares[28] = 'B';
    this.squares[36] = 'W';
    this.squares[35] = 'B';
    this.cBlack = 2;
    this.cWhite = 2;
  }

  getIndex(x: number, y: number) : number{ return  y * 8 + x; }

  getX(index: number) :number { return index % 8; }

  getY(index: number) :number { return Math.floor(index / 8); }

  checkMove(player: string, index:number) :boolean{

    let countTurn = 0;
    if(this.squares[index] === null){
      countTurn = 
        this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), 1, 0)
      + this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), 1, 1)
      + this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), 0, 1)
      + this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), -1, 1)
      + this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), -1, 0)
      + this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), -1, -1)
      + this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), 0, -1)
      + this.checkMoveAnyDirection(player, this.getX(index), this.getY(index), 1, -1);
    }
    return countTurn > 0

  }
  checkAnyValidMoves(opponent: string) : boolean {
    let validMove = false;
    for(let i = 0; i < this.squares.length; i++){
      if(this.squares[i] === null){
        if(this.checkMove(opponent, i)){
          validMove = true; break;
        }
      }
    }
    return validMove;
  }

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

  changeCatchedCoins(player: string, x: number, y: number, incX: number, incY: number) : void {
   
    let newX = x + incX;
    let newY = y+incY;
    let opponent = player === 'W' ? 'B' : 'W';

    if(this.checkMoveAnyDirection(this.player, x, y, incX, incY) > 0){
      while(true){
        let sqare = this.squares[this.getIndex(newX,newY)];
          this.squares[this.getIndex(newX,newY)] = player;
        if(newX > 7 || newY > 7 || newX < 0 || newY < 0 || sqare === player || sqare === null){ break; }
        newX+= incX;
        newY+= incY;
        console.log(this.squares[this.getIndex(newX,newY)]);
      }
                }
  }

  countWhiteCoins () : number {
    let counter = 0;
    for(let i = 0; i < this.squares.length; i++)
        {
          if(this.squares[i] === 'W'){
            counter++;
        }
      }
  return counter;

  }

  countBlackCoins () : number {
    let counter = 0;
    for(let i = 0; i < this.squares.length; i++)
        {
          if(this.squares[i] === 'B'){
            counter++;
        }
      }
  return counter;

  }

  makeMove(index:number) {

    let opponent = this.player === 'W' ? 'B' : 'W';

      if(this.checkMove(this.player, index)){ 
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), 1, 0)
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), 1, 1)
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), 0, 1)
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), -1, 1)
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), -1, 0)
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), -1, -1)
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), 0, -1)
        this.changeCatchedCoins(this.player, this.getX(index), this.getY(index), 1, -1);
        this.squares[index] = this.player;
        if(this.checkAnyValidMoves(opponent)){
          this.player = this.player === 'W' ? 'B' : 'W' 
        }
        else {alert('the opponent ' + opponent + ' has no moves');} 
      }

      if(!this.checkAnyValidMoves(this.player) && !this.checkAnyValidMoves(opponent)){
        for(let i = 0; i < this.squares.length; i++)
        {
          if(this.squares[i] === 'W'){
            this.counterW++;
          }
          else if(this.squares[i] === 'B'){
            this.counterB++;
          }
        }
        this.winner = this.counterW > this.counterB ? 'W' : 'B';
        this.freshpage = true;
      }

      this.cBlack = this.countBlackCoins();
      this.cWhite = this.countWhiteCoins();

    console.log(this.squares[index]);

  }

}
