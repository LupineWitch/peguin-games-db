import {  Component,  OnInit, ViewChild,  
  ɵCompiler_compileModuleSync__POST_R3__} from '@angular/core';
import { Game } from '../Models/game';
import { DataServiceService } from '../data-service.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  // newgame: Game;
  // show = false;

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

}

