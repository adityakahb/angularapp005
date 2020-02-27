import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-author-teaser',
  templateUrl: './author-teaser.component.html',
  styleUrls: ['./author-teaser.component.scss']
})
export class AuthorTeaserComponent implements OnInit {
  @Input() data;
  @Input() theme;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

  trimStr(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  getTrimmedData(str, num) {
    let st = '';
    const starr = str.split(' ');
    for (let item of starr) {
      if (st.length < num) {
        st += ' ' + item;
      }
    }
    st = this.trimStr(st);
    st += str === st ? '' : '...';
    return st;
  }
}
