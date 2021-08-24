import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import {UsersModule} from "../users/users.module";



@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    UsersModule
  ]
})
export class PostsModule { }
