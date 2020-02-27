import { CommonModule } from '@angular/common';
import { CtaComponent } from './cta.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CtaComponent
  ],
  exports: [
    CtaComponent
  ]
})
export class CtaModule { }
