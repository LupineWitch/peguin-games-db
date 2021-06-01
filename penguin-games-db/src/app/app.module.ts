import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditGameComponent } from './edit-game/edit-game.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddGameComponent } from './add-game/add-game.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    GamesComponent,
    AddGameComponent,
    EditGameComponent,
    DeleteGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent,HttpClientModule]
})
export class AppModule { }
