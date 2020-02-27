import { NgModule } from '@angular/core';
import { ResponsiveBreakpointDirective } from './ResponsiveBreakpoint/responsive-breakpoint.directive';

@NgModule({
  declarations: [
    ResponsiveBreakpointDirective
  ],
  exports: [
    ResponsiveBreakpointDirective
  ],
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class DirectiveModule { }
