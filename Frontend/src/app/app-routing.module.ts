import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BlogPageComponent} from "./features/blog/pages/blog-page/blog-page.component";
import {PostComponent} from "./shared/components/post/post.component";
import {EntryPageComponent} from './features/auth/pages/entry-page/entry-page.component';
import {ProfilePageComponent} from './features/settings/pages/profile-page/profile-page.component';
import {SettingsCardComponent} from './features/settings/components/settings-card/settings-card.component';


const routes: Routes = [
  {path: 'login', component: EntryPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'post', component: PostComponent},
  {path: 'blog/:num', component: BlogPageComponent},
  {path: 'settings', component: SettingsCardComponent},
  {path: 'blog', component: BlogPageComponent},
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
