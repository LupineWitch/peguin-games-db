import {  Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Game } from '../Models/game';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.scss']
})
export class DeleteGameComponent implements OnInit {
  errorMessage: string = "";
  @Input() selected: Game;
  @Output() deleteGame: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    console.log(this.selected);
    this.deleteGame.emit(this.selected.id);
  }

}
