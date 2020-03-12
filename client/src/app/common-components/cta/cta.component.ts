import { Component, OnInit, Input } from '@angular/core';

let str = '';
let theme = '';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  @Input() data;
  @Input() theme = 'light';

  buttontype;
  cssclass;
  href;
  icon;
  tag;
  text;
  title;
  index;
  last;
  share;
  possibleLoading = false;
  loading = false;

  routerLink = {
    isRouter: false,
    href: ''
  };

  constructor() { }

  ngOnInit() {
    const data = this.data || {};
    this.buttontype = data.buttontype || 'button';
    this.cssclass = data.cssclass || '';
    this.href = data.href || '#';
    this.icon = data.icon || '';
    this.tag = data.tag || '';
    this.text = data.text || '';
    this.title = data.title || '';
    this.index = -1;
    this.possibleLoading = data.possibleLoading || false;
    this.loading = data.loading || false;
    if ((data.index || 0) >= 0) {
      this.index = data.index;
    }
    this.last = data.last;
    this.share = data.share;
    let href = this.href || '';
    if (href.charAt(0) === '[' && href.charAt(href.length - 1) === ']') {
      this.routerLink.isRouter = true;
      this.routerLink.href = href.substr(1, href.length - 2);
    } else {
      this.routerLink.href = href;
    }
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
    if ((this.icon || this.possibleLoading) && this.text) {
      str += ' txt-icn';
    }
    if ((this.icon || this.possibleLoading) && !this.text) {
      str += ' icn-o';
    }
    if (!(this.icon || this.possibleLoading) && this.text) {
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
