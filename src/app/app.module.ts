import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuBurgerComponent } from './menu-burger/menu-burger.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { BoardCommentsComponent } from './board-comments/board-comments.component';
import { UpperCaseTheFirstLetter } from './upperCaseTheFirstLetter.pipe';
import { ForkComponent } from './fork/fork.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBurgerComponent,
    TitleBarComponent,
    BoardCommentsComponent,
    UpperCaseTheFirstLetter,
    ForkComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
