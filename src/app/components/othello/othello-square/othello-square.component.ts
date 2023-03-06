import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reversi-square',
  templateUrl: './othello-square.component.html',
  styleUrls: ['./othello-square.component.css']
})
export class ReversiSquareComponent {
  @Input() value: 'W'|'B'|undefined
}
