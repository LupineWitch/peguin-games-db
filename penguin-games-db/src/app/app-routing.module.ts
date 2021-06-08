import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { DistributionsComponent } from './distributions/distributions.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { GamesComponent } from './games/games.component';
import { PublisherComponent } from './publisher/publisher.component';

const routes: Routes = [
  { path: 'add-game', component: AddGameComponent }, 
  { path: '', component: GamesComponent },
  { path: 'edit-game', component: EditGameComponent}, 
  { path: 'publisher', component: PublisherComponent},
  { path: 'distribution', component: DistributionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
