import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input() data;

  tag;
  title;
  icon;
  align;
  theme;

  constructor() { }

  ngOnInit() {
    let data = this.data || {};
    this.tag = data.tag || '';
    this.title = data.title || '';
    this.icon = data.icon || '';
    this.align = data.align || 'center';
    this.theme = data.theme || 'light';
  }

  getSectionClass(classname) {
    if ((classname || '').indexOf('food--') === -1) {
      return false;
    }
    return true;
  }
}
