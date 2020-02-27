import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/index',
    pathMatch: 'full'
  },
  {
    path: 'pages/recipe',
    redirectTo: 'pages/recipe',
    pathMatch: 'full'
  },
  {
    path: 'pages/my-profile',
    redirectTo: 'pages/my-profile',
    pathMatch: 'full'
  },
  {
    path: 'pages/register',
    redirectTo: 'pages/register',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
