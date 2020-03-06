import { AlertMsgModule } from './../../common-components/alert-msg/alert-msg.module';
import { CommonModule } from '@angular/common';
import { CtaModule } from './../../common-components/cta/cta.module';
import { DirectiveModule } from './../../directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './../../graphql.module';
import { NgModule, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { SiteheaderComponent } from './../siteheader/siteheader.component';

@NgModule({
  imports: [
    AlertMsgModule,
    CommonModule,
    CtaModule,
    DirectiveModule,
    FormsModule,
    GraphQLModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    SiteheaderComponent,
    SitefooterComponent
  ],
  declarations: [
    SiteheaderComponent,
    SitefooterComponent
  ],
  providers: [
  ]
})
export class DefaultLayoutModule { }
