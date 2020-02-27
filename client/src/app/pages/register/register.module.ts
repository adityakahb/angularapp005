import { AuthorTeaserModule } from './../../common-components/author-teaser/author-teaser.module';
import { CommonModule } from '@angular/common';
import { CtaModule } from './../../common-components/cta/cta.module';
import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { RatingsReviewsModule } from './../../common-components/ratings-reviews/ratings-reviews.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ResponsiveImageModule } from './../../common-components/responsive-image/responsive-image.module';
import { StandardTeaserModule } from './../../common-components/standard-teaser/standard-teaser.module';

@NgModule({
  imports: [
    AuthorTeaserModule,
    CommonModule,
    CtaModule,
    DirectiveModule,
    RatingsReviewsModule,
    RegisterRoutingModule,
    ResponsiveImageModule,
    StandardTeaserModule,
  ],
  declarations: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
