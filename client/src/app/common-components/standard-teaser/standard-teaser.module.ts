import { CommonModule } from '@angular/common';
import { CtaModule } from './../cta/cta.module';
import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { RatingsReviewsModule } from './../ratings-reviews/ratings-reviews.module';
import { ResponsiveImageModule } from '../responsive-image/responsive-image.module';
import { StandardTeaserComponent } from './standard-teaser.component';

@NgModule({
  imports: [
    CommonModule,
    CtaModule,
    DirectiveModule,
    RatingsReviewsModule,
    ResponsiveImageModule,
  ],
  declarations: [
    StandardTeaserComponent
  ],
  exports: [
    StandardTeaserComponent
  ]
})
export class StandardTeaserModule { }
