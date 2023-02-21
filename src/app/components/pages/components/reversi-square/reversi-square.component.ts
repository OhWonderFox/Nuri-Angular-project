import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reversi-square',
  templateUrl: './reversi-square.component.html',
  styleUrls: ['./reversi-square.component.css']
})
export class ReversiSquareComponent {
  @Input() value: 'W'|'B'|undefined
}
