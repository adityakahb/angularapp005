import { ArticleComponent } from './../../components/article/article.component';
import { AuthorTeaserModule } from './../../common-components/author-teaser/author-teaser.module';
import { CommonModule } from '@angular/common';
import { CtaModule } from './../../common-components/cta/cta.module';
import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { RatingsReviewsModule } from './../../common-components/ratings-reviews/ratings-reviews.module';
import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ResponsiveImageModule } from './../../common-components/responsive-image/responsive-image.module';
import { SectionHeaderModule } from './../../common-components/section-header/section-header.module';
import { StandardTeaserModule } from './../../common-components/standard-teaser/standard-teaser.module';

@NgModule({
  imports: [
    AuthorTeaserModule,
    CommonModule,
    CtaModule,
    DirectiveModule,
    RatingsReviewsModule,
    RecipeRoutingModule,
    ResponsiveImageModule,
    SectionHeaderModule,
    StandardTeaserModule,
  ],
  declarations: [
    ArticleComponent,
    RecipeComponent,
  ]
})
export class RecipeModule { }
