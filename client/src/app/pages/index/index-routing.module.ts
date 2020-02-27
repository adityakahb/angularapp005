import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  { path: 'pages/index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, DirectiveModule]
})
export class IndexRoutingModule { }
