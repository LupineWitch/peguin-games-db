import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import {Game} from '../Models/game';


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  errorMessage: string = "";
  @Input() gamesList: Game[];
  @Input() selected: Game;
  @Output() selectGame: EventEmitter<Game> = new EventEmitter();
  @Output() editGame: EventEmitter<Game> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  verifyData(formValues: Game): void {
    if(this.gamesList.find(x => x.name === formValues.name && x.name == formValues.name)){
      this.errorMessage = "Gra już istnieje w bazie, proszę wprowadzić inne dane!"
      return;
    }
    this.errorMessage = "";
    let idx = this.gamesList.findIndex(x => x.id == this.selected.id);
    formValues.id = this.selected.id;
    this.gamesList[idx] = formValues;
    this.selectGame.emit(undefined);
    this.editGame.emit(formValues);
  }

}
