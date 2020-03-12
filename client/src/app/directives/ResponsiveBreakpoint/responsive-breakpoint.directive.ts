import { CommonFunctionsService } from './../../services/common-functions.service';
import { Directive, AfterViewInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

let dpr = 0;

@Directive({
  selector: '[appResponsiveBreakpoint]'
})
export class ResponsiveBreakpointDirective implements AfterViewInit {
  currentBreakpoint = '';
  constructor(public breakpointObserver: BreakpointObserver, private window: Window, private bpService: CommonFunctionsService) {
    if (this.window && window.devicePixelRatio) {
      dpr = this.window.devicePixelRatio;
    }
  }
  ngAfterViewInit(): void {
    this.breakpointObserver.observe([
      '(min-width: 576px)',
      '(min-width: 768px)',
      '(min-width: 992px)',
      '(min-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        this.currentBreakpoint = 'xs';
        if (state.breakpoints['(min-width: 576px)']) {
          this.currentBreakpoint = 'sm';
        }
        if (state.breakpoints['(min-width: 768px)']) {
          this.currentBreakpoint = 'md';
        }
        if (state.breakpoints['(min-width: 1024px)']) {
          this.currentBreakpoint = 'lg';
        }
        if (state.breakpoints['(min-width: 1200px)']) {
          this.currentBreakpoint = 'xl';
        }
        setTimeout(() => {
          this.bpService.setCBP(this.currentBreakpoint + (dpr > 1 ? '2' : ''));
        }, 0);
      });
  }
}
