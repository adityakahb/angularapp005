import { CommonModule } from '@angular/common';
import { CtaModule } from './../cta/cta.module';
import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { RatingsReviewsModule } from './../ratings-reviews/ratings-reviews.module';
import { ResponsiveImageModule } from '../responsive-image/responsive-image.module';
import { ActivityTeaserComponent } from './activity-teaser.component';

@NgModule({
  imports: [
    CommonModule,
    CtaModule,
    DirectiveModule,
    RatingsReviewsModule,
    ResponsiveImageModule,
  ],
  declarations: [
    ActivityTeaserComponent
  ],
  exports: [
    ActivityTeaserComponent
  ]
})
export class ActivityTeaserModule { }
