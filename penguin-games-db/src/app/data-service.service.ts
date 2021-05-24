import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './Models/game';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {}

  rootURL = 'http://localhost:7777';

  getGames()
  {
    return this.http.get(this.rootURL + '/games');
  
  }
}
