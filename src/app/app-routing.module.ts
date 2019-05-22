import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CharacterSearchComponent } from './character-search/character-search.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TvshowSearchComponent } from './tvshow-search/tvshow-search.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
const routes: Routes = [
  {path: 'login', component: UserLoginComponent},
  { path: 'signup', component: UserSignupComponent },
  { path: 'watchmovie', component: MovieSearchComponent },
  { path: 'watchtvshow', component: TvshowSearchComponent },
  { path: 'chatapp', component: ChatAppComponent },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
  { path: 'charactersearch', component: CharacterSearchComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
