import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routing';
import { NasaTestComponent } from './components/nasa-test/nasa-test.component';
import { NasaPictureTestComponent } from './components/nasa-picture-test/nasa-picture-test.component';
import { NasaPictureDetailsComponent } from './components/nasa-picture-details/nasa-picture-details.component';

import { SpaceBannerDefaultComponent } from './space-banner-default/space-banner-default.component';

import {UserService} from './services/user.service.client';
import {PostService} from './services/post.service.client';
import {NasaServiceClient} from './services/nasa.service.client';
import {CBService} from './services/cb.service.client';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import {ApodComponent} from './components/apod/apod.component';
import {FrontPageComponent} from './components/user/front-page/front-page.component';
import {ApodarchiveComponent} from './components/apodarchive/apodarchive.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import {PublicProfileComponent} from './components/user/public-profile/public-profile.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { SearchComponent } from './components/search/search.component';
import { SearchProfileComponent } from './components/search/search-profile/search-profile.component';
import { SearchNasaComponent } from './components/search/search-nasa/search-nasa.component';
import { SearchCbComponent } from './components/search/search-cb/search-cb.component';
import { CreateObjectComponent } from './components/create-object/create-object.component';
import { UserPicturesComponent } from './components/picture/user-pictures/user-pictures.component';
import { UserAlbumComponent } from './components/album/user-album/user-album.component';
import { PictureNewComponent } from './components/picture/picture-new/picture-new.component';
import { AlbumNewComponent } from './components/album/album-new/album-new.component';
import {PictureServiceClient} from './services/picture.service.client';
import {AlbumServiceClient} from './services/album.service.client';
import { AlbumListComponent } from './components/album/album-list/album-list.component';
import {SharedService} from './services/shared.service.client';
import {CEService} from './services/ce.service.client';
import {PubService} from './services/pub.service.client';
import {AuthGuard} from './services/auth-guard.service.client';
import { SearchCeComponent } from './components/search/search-ce/search-ce.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchPubComponent } from './components/search/search-pub/search-pub.component';
import { SearchNasaDetailComponent } from './components/search/search-nasa/search-nasa-detail/search-nasa-detail.component';
import { AlbumCarouselComponent } from './components/album-carousel/album-carousel.component';
import { CarouselModule } from 'angular4-carousel';
import { EditObjectComponent } from './components/edit-object/edit-object.component';
import { EditUserObjectComponent } from './components/edit-object/edit-user-object/edit-user-object.component';
import { EditCelestialBodyObjectComponent } from './components/edit-object/edit-celestial-body-object/edit-celestial-body-object.component';
import { EditCelestialEventObjectComponent } from './components/edit-object/edit-celestial-event-object/edit-celestial-event-object.component';
import { EditPublicationObjectComponent } from './components/edit-object/edit-publication-object/edit-publication-object.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import {AdminServiceClient} from "./services/admin.service.client";

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    NasaTestComponent,
    NasaPictureTestComponent,
    FrontPageComponent,
    NasaPictureDetailsComponent,
    ApodComponent,
    ApodarchiveComponent,
    SpaceBannerDefaultComponent,
    RegisterComponent,
    ProfileComponent,
    PostComponent,
    PostListComponent,
    PublicProfileComponent,
    CreatePostComponent,
    SearchComponent,
    SearchProfileComponent,
    SearchNasaComponent,
    SearchCbComponent,
    UserPicturesComponent,
    UserAlbumComponent,
    PictureNewComponent,
    AlbumNewComponent,
    AlbumListComponent,
    CreateObjectComponent,
    SearchCeComponent,
    HomepageComponent,
    SearchPubComponent,
    SearchNasaDetailComponent,
    AlbumCarouselComponent,
    EditObjectComponent,
    EditUserObjectComponent,
    EditCelestialBodyObjectComponent,
    EditCelestialEventObjectComponent,
    EditPublicationObjectComponent,
    AdminUserListComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    CarouselModule
  ],
  // Client Side services here
  providers: [NasaServiceClient, UserService, PostService, CBService, CEService, PubService, PictureServiceClient,
  AlbumServiceClient, SharedService, AuthGuard, AdminServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
