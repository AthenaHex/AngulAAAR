import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ___ les pipes
import { UpperCaseTheFirstLetter } from './upperCaseTheFirstLetter.pipe';
import { DeleteSpecialCharacters } from './deleteSpecialCharacters.pipe';
// ___ les composants
import { AppComponent } from './app.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { BoardCommentsComponent } from './board-comments/board-comments.component';
import { ForkComponent } from './fork/fork.component';
import { StarsComponent } from './stars/stars.component';
import { DetailsComponent } from './board-comments/details.component';
import { FooterComponent } from './footer/footer.component';
import { BoardOnlyCommentsComponent } from './board-only-comments/board-only-comments.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// ___ le routage
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    MenuBurgerComponent,
    TitleBarComponent,
    BoardCommentsComponent,
    UpperCaseTheFirstLetter,
    DeleteSpecialCharacters,
    ForkComponent,
    StarsComponent,
    DetailsComponent,
    FooterComponent,
    BoardOnlyCommentsComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'list', component: BoardCommentsComponent},
      { path: 'comments', component: BoardOnlyCommentsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'about', component: AboutUsComponent},
      { path: 'details/:idRestaurant', component: DetailsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      //{ path: '**', redirectTo: 'restaurants-advice', pathMatch: 'full'},
    ]),
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
