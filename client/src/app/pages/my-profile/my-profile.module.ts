import { ActivityTeaserModule } from './../../common-components/activity-teaser/activity-teaser.module';
import { CommonModule } from '@angular/common';
import { CtaModule } from './../../common-components/cta/cta.module';
import { DirectiveModule } from './../../directives/directive.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { NgModule } from '@angular/core';
import { RatingsReviewsModule } from './../../common-components/ratings-reviews/ratings-reviews.module';
import { ResponsiveImageModule } from './../../common-components/responsive-image/responsive-image.module';
import { SectionHeaderModule } from './../../common-components/section-header/section-header.module';
import { StandardTeaserModule } from './../../common-components/standard-teaser/standard-teaser.module';

@NgModule({
  imports: [
    CommonModule,
    CtaModule,
    DirectiveModule,
    MyProfileRoutingModule,
    RatingsReviewsModule,
    ResponsiveImageModule,
    SectionHeaderModule,
    StandardTeaserModule,
    ActivityTeaserModule,
  ],
  declarations: [
    MyProfileComponent
  ]
})
export class MyProfileModule { }
