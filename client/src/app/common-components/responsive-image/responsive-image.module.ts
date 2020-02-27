import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResponsiveImageComponent } from './responsive-image.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ResponsiveImageComponent
  ],
  exports: [
    ResponsiveImageComponent
  ]
})
export class ResponsiveImageModule { }
