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
import { PublisherComponent } from './publisher/publisher.component';
import { FormsModule }   from '@angular/forms';
// import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { EditPublisherComponent } from './edit-publisher/edit-publisher.component';
import { DeletePublisherComponent } from './delete-publisher/delete-publisher.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DistributionsComponent } from './distributions/distributions.component';
import { AddDistributionComponent } from './add-distribution/add-distribution.component';
import { EditDistributionComponent } from './edit-distribution/edit-distribution.component';
import { DeleteDistributionComponent } from './delete-distribution/delete-distribution.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    GamesComponent,
    AddGameComponent,
    EditGameComponent,
    DeleteGameComponent,
    PublisherComponent,
    AddPublisherComponent,
    EditPublisherComponent,
    DeletePublisherComponent,
    DistributionsComponent,
    AddDistributionComponent,
    EditDistributionComponent,
    DeleteDistributionComponent,
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
    FormsModule,
    // MatSnackBar,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent,HttpClientModule]
})
export class AppModule { }
