import { CommonModule } from '@angular/common';
import { CtaComponent } from './cta.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CtaComponent
  ],
  exports: [
    CtaComponent
  ]
})
export class CtaModule { }
