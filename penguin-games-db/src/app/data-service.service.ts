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

  deleteDistribution(id:number)
  {
      return this.http.delete(this.rootURL + 'distribution/' + id);

  }

  deleteGame(id:number)
  {
      return this.http.delete(this.rootURL + 'games/' + id);

  }

  deletePublisher(id: number) {
      return this.http.delete(this.rootURL + 'publisher/' + id);
  }


  editGame(id: number, editedGame: Game){
    return this.http.put(this.rootURL + 'games/' + id, editedGame);
  }

  editPublisher(id: number, publisher: Publisher) {
    return this.http.put(this.rootURL + 'publisher/' + id, publisher);
  }

  
  editDistribution(id: number, distribution: Distribution) {
    return this.http.put(this.rootURL + 'distribution/' + id, distribution);
  }


  addPublisher(publisher: Publisher) {
    return this.http.post(this.rootURL + 'publisher/', publisher);
  }
  
  addGame(newGame: Game)
  {
    return this.http.post(this.rootURL + 'games/', newGame);
  }

  addDistribution(newDistribution: Distribution)
  {
    return this.http.post(this.rootURL + 'distribution/', newDistribution);
  }


}
