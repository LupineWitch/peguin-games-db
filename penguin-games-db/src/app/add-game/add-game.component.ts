import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Publisher } from '../Models/publisher';
import {Game} from '../Models/game'
import { Distribution } from '../Models/distribution';
import { DataServiceService } from '../data-service.service';
import { NgForm } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  genres: string[] = ['action', 'shooter', 'adventure', 'medival', 'assassin'];
  publisherList?: Publisher[] = [];
  distributionList?: Distribution[] = [];

  errorMessage: string = "";
  newGame: Game;
  @Input()
  gameList: Game[] = [];
  @Output() addNewGame: EventEmitter<Game> = new EventEmitter()

  constructor(private dataService: DataServiceService) 
  { 
    this.dataService.getDistributions().subscribe(distribution => {
      this.distributionList = distribution;
    });

    this.dataService.getPublishers().subscribe(publisher => {
      this.publisherList = publisher;
    });
  }

  ngOnInit(): void {
  }

  verifyData(formValues: NgForm): void {
    if(this.gameList.find(x => x.name === formValues.name && x.publisherId == formValues.value.publisherId)){
      this.errorMessage = "Game exists in the database"
      return;
    }
    
    this.errorMessage = "";
    this.newGame = formValues.value;
    this.addNewGame.emit(this.newGame);
    console.log(this.newGame);
    console.log(formValues);
    console.log(this.errorMessage);

    console.log("add game event emitted");
  }
}


