import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {RouterModule, Routes} from "@angular/router";
import { UserDetailComponent } from './user-detail/user-detail.component';
const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: "create",
    component: UserAddComponent
  },
  {
    path: ":id/edit",
    component: UserEditComponent
  },
  {
    path: ":id/detail",
    component: UserDetailComponent
  }
]
@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    UserDetailComponent
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ]
})
export class UsersModule { }
