import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './Models/game';
import { Observable } from 'rxjs';
import { Publisher } from './Models/publisher';
import { Distribution } from './Models/distribution';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {}

  rootURL = 'http://localhost:7777/';

  getGames(): Observable<Game[]>
  {
    return this.http.get<Game[]>(this.rootURL + 'games/');
  }

  getPublishers(): Observable<Publisher[]>
  {
    return this.http.get<Publisher[]>(this.rootURL + 'publisher/');
  }

  getDistributions(): Observable<Distribution[]>
  {
    return this.http.get<Distribution[]>(this.rootURL + 'distribution/');
  }

  deleteGame(id:number)
  {
      return this.http.delete(this.rootURL + 'games/' + id);

  }

  editGame(id: number, editedGame: Game){
    return this.http.put(this.rootURL + '/games/' + id, editedGame);
  }
}
