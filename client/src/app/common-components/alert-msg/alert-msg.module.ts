import { AlertMsgComponent } from './alert-msg.component';
import { CommonModule } from '@angular/common';
import { CtaModule } from './../cta/cta.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    CtaModule
  ],
  declarations: [
    AlertMsgComponent
  ],
  exports: [
    AlertMsgComponent
  ]
})
export class AlertMsgModule { }
