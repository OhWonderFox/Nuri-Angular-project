import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { Menu1Component } from '../menu1/menu1.component';
import { BlogComponent } from '../blog/blog.component';
import { GameComponent } from '../ttt/ttt-game/ttt-game.component';
import { SquareComponent } from '../ttt/ttt-square/ttt-square.component';
import { ReversiSquareComponent } from '../othello/othello-square/othello-square.component';
import { ReversiGameComponent } from '../othello/othello-game/othello-game.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AdminDashboardComponent,
    Menu1Component,
    BlogComponent,
    GameComponent,
    SquareComponent,
    ReversiSquareComponent,
    ReversiGameComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
