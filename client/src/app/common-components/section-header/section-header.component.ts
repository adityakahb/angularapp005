import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input() tag;
  @Input() title;
  @Input() icon;
  @Input() align;
  @Input() theme;

  constructor() { }

  ngOnInit() {
  }

  getSectionClass(classname) {
    if ((classname || '').indexOf('food--') === -1) {
      return false;
    }
    return true;
  }
}
