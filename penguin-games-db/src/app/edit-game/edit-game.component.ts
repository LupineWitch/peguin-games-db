import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core'
import { DataServiceService } from '../data-service.service';
import { Distribution } from '../Models/distribution';
import {Game} from '../Models/game';
import { Publisher } from '../Models/publisher';


@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  errorMessage: string = "";
  genres: string[] = ['action', 'shooter', 'adventure', 'medival', 'assassin'];
  publisherList?: Publisher[] = [];
  distributionList?: Distribution[] = [];

  @ViewChild('nameInput') nameInput: any;
  @ViewChild('distributorInput') distributorInput: any;
  @ViewChild('publisherInput') publisherInput: any;
  @ViewChild('yearInput') yearInput: any;
  @ViewChild('genreInput') genreInput: any;
  @ViewChild('ratingInput') ratingInput: any;
  @ViewChild('diskInput') diskInput: any;


  @Input() gamesList: Game[];
  @Input() selected: Game;

  @Output() selectGame: EventEmitter<Game> = new EventEmitter();
  @Output() editGame: EventEmitter<Game> = new EventEmitter();
  
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
    console.log(this.selected);
    // this.selectedD = this.selected.distributionId;
    // console.log(this.selectedD);
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
