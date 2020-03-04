import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';
import { FavouritesComponent } from './home/favourites/favourites.component';
import { ImageComponent } from './home/favourites/image/image.component';
import { StoreComponent } from './store/store.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HeadingComponent } from './home/favourites/heading/heading.component';
import { BackToTopComponent } from './home/back-to-top/back-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { TrademarkComponent } from './footer/trademark/trademark.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './home/about-me/about-me.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { EventsComponent } from './gallery/events/events.component';
import { PersonalComponent } from './gallery/personal/personal.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticateComponent } from './admin/authenticate/authenticate.component';
import { ManageComponent } from './admin/manage/manage.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { PersonalConfigurationComponent } from './admin/manage/personal-configuration/personal-configuration.component';
import { EventsConfigurationComponent } from './admin/manage/events-configuration/events-configuration.component';
import { DragDropDirective } from './admin/manage/drag-drop.directive';
import { UploadFilesComponent } from './admin/manage/upload-files/upload-files.component';
import { ContactComponent } from './contact/contact.component';

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
    AboutComponent,
    HeadingComponent,
    BackToTopComponent,
    FooterComponent,
    TrademarkComponent,
    ComingSoonComponent,
    HomeComponent,
    AboutMeComponent,
    EventsComponent,
    PersonalComponent,
    AdminComponent,
    AuthenticateComponent,
    ManageComponent,
    AdminNavBarComponent,
    PersonalConfigurationComponent,
    EventsConfigurationComponent,
    DragDropDirective,
    UploadFilesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMasonryModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'store', component: StoreComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'admin', component: AdminComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
