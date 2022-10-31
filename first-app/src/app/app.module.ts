import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CardComponent } from './card/card.component';
import { ColCardComponent } from './col-card/col-card.component';
import { CardBookComponent } from './card-book/card-book.component';
import { CardGameComponent } from './card-game/card-game.component';
import { CardAlbumComponent } from './card-album/card-album.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { CardFurnitureComponent } from './card-furniture/card-furniture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainContainerComponent,
    CardComponent,
    ColCardComponent,
    CardBookComponent,
    CardGameComponent,
    CardAlbumComponent,
    CardMovieComponent,
    CardFurnitureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
