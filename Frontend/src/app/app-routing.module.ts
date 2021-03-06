import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPageComponent} from './features/blog/pages/blog-page/blog-page.component';
import {PostComponent} from './shared/components/post/post.component';
import {EntryPageComponent} from './features/auth/pages/entry-page/entry-page.component';
import {ProfilePageComponent} from './features/settings/pages/profile-page/profile-page.component';
import {MainBlogPageComponent} from './features/main/pages/main-blog-page/main-blog-page.component';
import {MainPostsPageComponent} from './features/main/pages/main-posts-page/main-posts-page.component';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {RoleGuardService} from './core/guards/role-guard.service';
import {SettingsPageComponent} from './features/settings/pages/settings-page/settings-page.component';
import {MainPageComponent} from "./features/main/pages/main-page/main-page.component";

const isAuthenticated = {role: 'Authenticated'};
const notAuthenticated = {role : 'Not Authenticated'};

const routes: Routes = [
  {path: 'login', component: EntryPageComponent, canActivate: [RoleGuardService], data: notAuthenticated},
  {path: 'profile', component: ProfilePageComponent, canActivate: [RoleGuardService], data: isAuthenticated},
  {path: 'post', component: PostComponent,  canActivate: [RoleGuardService], data: isAuthenticated},
  {path: 'blog/:num', component: BlogPageComponent,  canActivate: [RoleGuardService], data: isAuthenticated},
  {path: 'settings', component: SettingsPageComponent,  canActivate: [RoleGuardService], data: isAuthenticated},
  {path: 'blog', component: BlogPageComponent,  canActivate: [RoleGuardService], data: isAuthenticated},
  {path: 'blogs', component: MainBlogPageComponent,  canActivate: [RoleGuardService], data: isAuthenticated},
  {path: 'posts', component: MainPostsPageComponent,  canActivate: [RoleGuardService], data: isAuthenticated },
  {path: 'home/:str', component: MainPageComponent, canActivate: [RoleGuardService], data: isAuthenticated },
  {path: '', component: MainPageComponent, canActivate: [RoleGuardService], data: isAuthenticated },
  {path: 'home', component: MainPageComponent, canActivate: [RoleGuardService], data: isAuthenticated },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
