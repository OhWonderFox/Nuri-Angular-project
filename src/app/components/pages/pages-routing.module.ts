import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {HomeComponent} from './components/home/home.component';
import {Menu1Component} from './components/menu1/menu1.component';
import {BlogComponent} from './components/blog/blog.component';
//import {GameComponent} from './components/game/game.component';
import {UserResolver} from './resolvers/user.resolver';
import {UsersResolver} from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'menu1', component: Menu1Component},
      {path: 'blog', component: BlogComponent},
     // {path: 'game', component: GameComponent},
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
