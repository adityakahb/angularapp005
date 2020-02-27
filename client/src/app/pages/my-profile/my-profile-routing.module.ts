import { MyProfileComponent } from './my-profile.component';
import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pages/my-profile', component: MyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, DirectiveModule]
})
export class MyProfileRoutingModule { }
