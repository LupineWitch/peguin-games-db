import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Game} from '../Models/game'

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  errorMessage: string = "";
  newGame: Game;
  @Input()
  gameList: Game[] = [];
  @Output() addNewGame: EventEmitter<Game> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  verifyData(formValues: Game): void {
    if(this.gameList.find(x => x.name === formValues.name && x.publisherId == formValues.publisherId)){
      this.errorMessage = "Game exists in the database"
      return;
    }
    
    this.errorMessage = "";
    this.newGame = formValues;
    this.addNewGame.emit(this.newGame);
  }
}


