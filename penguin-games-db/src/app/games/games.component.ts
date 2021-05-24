import {  Component,  OnInit,  
  ɵCompiler_compileModuleSync__POST_R3__,} from '@angular/core';
import { Game } from '../Models/game';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameList: Game[];
  selectedGame: Game ;
  selected = false;
  newgame: Game;
  show = false;
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void
  {
    this.dataService.getGames().subscribe((games:any ) => {
      this.gameList = games.Games;
     console.log("Callback parameter");
     console.log(games);
     console.log("Compnent List");
      console.log(this.gameList);

    });
  }

}
