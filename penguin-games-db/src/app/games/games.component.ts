import {  Component,  OnInit, ViewChild,  
  ɵCompiler_compileModuleSync__POST_R3__} from '@angular/core';
import { Game } from '../Models/game';
import { DataServiceService } from '../data-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  displayedColumns: string[] = 
    ['id', 'name', 'distributionId', 'publisherId', 
    'releaseYear', 'genre', 'averageRating', 'diskSpace', 'actions'];
    
  gameList: Game[] = [];
  dataSource: MatTableDataSource<Game>;
  value: string;
  selectedGame: Game;
  selected = false;
  newgame: Game;
  addFormShow = false;
  prevGameId = 0;
  displayEditForm = false;
  addButtonShow = true;

  constructor(private dataService: DataServiceService) 
  { 
    this.dataService.getGames().subscribe(games => {
      this.gameList = games;
      this.dataSource = new MatTableDataSource(this.gameList);
      this.dataSource.sort = this.sort;
      
    });
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('searchInput') searchInput: any;

  ngOnInit(): void { }

  search(value: string)
  {
    this.value = value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  onSelect(game: Game): void {
    if (!this.selected) {
      this.selectedGame = game;
    }
  }

  clear()
  {
    this.search('');
    this.searchInput.nativeElement.value = '';
  }

  delete(which: number): void {
    let idx = this.gameList.findIndex((x) => x.id == which);
    this.gameList.splice(idx, 1);
    this.dataService.deleteGame(which).subscribe((x) => console.log(x));
  }

  edit(game: Game): void {
    console.log('edited game:' + game);
    this.dataService.editGame(game.id, game).subscribe((x) => console.log(x));
  }

  add(game: Game): void {
    let id;
    if (this.gameList.length == 0) id = 1;
    else id = this.gameList[this.gameList.length - 1].id + 1;
    game.id = id;
    this.gameList.push(game);
    this.dataService.addGame(game).subscribe((x) => console.log(x));

    this.hideEditForm();
  }
  showEditForm(): void {
    this.addButtonShow = false;
    this.addFormShow = true;
  }
  
  hideEditForm(): void {
    this.addButtonShow = true;
    this.addFormShow = false;
  }
  
  updateFormVisibility(game: Game): void // Edit
  {
    this.selectedGame != undefined ? this.prevGameId = this.selectedGame.id : -1;
    this.onSelect(game);

    if (this.displayEditForm)
    {
      if (this.prevGameId == this.selectedGame.id) 
        this.displayEditForm = false;
    }
    else
    {
      this.displayEditForm = true;
    }
  }
}

