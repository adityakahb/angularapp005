import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayoutModule } from './layout/defaultlayout/defaultlayout.module';
import { IndexModule } from './pages/index/index.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MyProfileModule } from './pages/my-profile/my-profile.module';
import { NgModule } from '@angular/core';
import { RecipeModule } from './pages/recipe/recipe.module';
import { RegisterModule } from './pages/register/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DefaultLayoutModule,
    IndexModule,
    LayoutModule,
    MyProfileModule,
    RecipeModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
