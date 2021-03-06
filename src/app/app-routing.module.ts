import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from "./components/layouts/master/master.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./auth.guard";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      // lazy loading feature module
      {
        path: 'users',
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ], canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
