import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  squares:any = []
  winner = '';
  isDraw = '';
  freshpage = true;

  constructor() { }

  ngOnInit(): void { }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isDraw = '';
    this.freshpage = false;
  }


makeMove(idx:number) {

  }

}
