import { Component, OnInit, Input } from '@angular/core';

let str = '';
let theme = '';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  @Input() buttontype = 'button';
  @Input() cssclass = '';
  @Input() href = '#';
  @Input() icon = '';
  @Input() tag = '';
  @Input() text = '';
  @Input() title = '';
  @Input() index = -1;
  @Input() last = true;
  @Input() theme = 'light';

  constructor() { }

  ngOnInit() {

  }

  generateCssClass(val) {
    str = '';
    theme = this.theme ? this.theme === 'dark' ? 'light' : 'dark' : 'dark';

    if (this.cssclass.indexOf('btn-') !== -1) {
      str = 'btn ' + this.cssclass;
    }
    if (this.cssclass === 'btn-outline') {
      str = str.replace('btn-outline', 'btn-outline-' + theme);
    }
    if (this.cssclass === 'teaser-tag') {
      str = 'teaser-tag ' + 't-' + theme;
    }
    if (this.icon && this.text) {
      str += ' txt-icn';
    }
    if (this.icon && !this.text) {
      str += ' icn-o';
    }
    if (!this.icon && this.text) {
      str += ' txt-o';
    }
    if (!val) {
      let strArr = str.split(' ');
      for (let i of strArr) {
        if (i.indexOf('t-dark') > -1 || i.indexOf('t-light') > -1) {
          str = i;
          break;
        }
      }
      return str;
    }
    return str;
  }
}
