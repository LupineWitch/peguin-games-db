import {  Component,  OnInit,  
  ViewChild,  
  ɵCompiler_compileModuleSync__POST_R3__} from '@angular/core';
import { Game } from '../Models/game';
import { DataServiceService } from '../data-service.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  displayedColumns: string[] = 
    ['id', 'name', 'distributionId', 'publisherId', 
    'releaseYear', 'genre', 'averageRating', 'diskSpace', 'actions'];
    
  gameList?: Game[] = [];
  dataSource: MatTableDataSource<Game>;
  selectedGame: Game;
  selected = false;
  newgame: Game;
  show = false;

  constructor(private dataService: DataServiceService) 
  { 
    this.dataService.getGames().subscribe(games => {
      this.gameList = games;
      // console.log("Callback parameter");
      // console.log(games);
      // console.log("Compnent List");
      // console.log(this.gameList);

      this.dataSource = new MatTableDataSource(this.gameList);
    this.dataSource.sort = this.sort;

    });
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void { }

  // sortData(sort: Sort) {
  //   const data = this.gameList?.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.gameList = data;
  //     return;
  //   }

  //   this.gameList = data?.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'id': return compare(a.id, b.id, isAsc);
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'release year': return compare(a.releaseYear, b.releaseYear, isAsc);
  //       case 'average rating': return compare(a.averageRating, b.averageRating, isAsc);
  //       case 'disk space': return compare(a.diskSpace, b.diskSpace, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
