import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './ttt-square.component.html',
  styleUrls: ['./ttt-square.component.css']
})
export class SquareComponent {
  @Input() value: 'X'|'O'|undefined


}
