import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {HomeComponent} from '../home/home.component';
import {Menu1Component} from '../menu1/menu1.component';
import {BlogComponent} from '../blog/blog.component';
import {GameComponent} from '../ttt/ttt-game/ttt-game.component';
import {SquareComponent} from '../ttt/ttt-square/ttt-square.component';
import {ReversiGameComponent} from '../othello/othello-game/othello-game.component';
import {ReversiSquareComponent} from '../othello/othello-square/othello-square.component';
import {UserResolver} from './resolvers/user.resolver';
import {UsersResolver} from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'menu1', component: Menu1Component},
      {path: 'blog', component: BlogComponent},
      {path: 'game', component: GameComponent},
      {path: 'reversi-game', component: ReversiGameComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
