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
// ___ le routage
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'list', component: BoardCommentsComponent},
      { path: 'details/:idRestaurant', component: DetailsComponent},
      { path: '', redirectTo: 'restaurants-advice', pathMatch: 'full' },
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
