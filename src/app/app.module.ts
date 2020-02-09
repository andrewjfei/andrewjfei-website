import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';
import { FavouritesComponent } from './favourites/favourites.component';
import { ImageComponent } from './favourites/image/image.component';
import { StoreComponent } from './store/store.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FavouritesComponent,
    ImageComponent,
    StoreComponent,
    GalleryComponent,
    ProjectsComponent,
    AboutComponent
  ],
    imports: [
        BrowserModule,
        IonicModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
