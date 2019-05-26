import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { MovieSearchComponent, SafePipe } from './movie-search/movie-search.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TvshowSearchComponent } from './tvshow-search/tvshow-search.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SafePipe,
    FooterComponent,
    CharacterSearchComponent,
    MovieSearchComponent,
    UserLoginComponent,
    UserSignupComponent,
    DashboardComponent,
    TvshowSearchComponent,
    ChatAppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
