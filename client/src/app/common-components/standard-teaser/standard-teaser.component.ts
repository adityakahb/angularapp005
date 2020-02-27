import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-standard-teaser',
  templateUrl: './standard-teaser.component.html',
  styleUrls: ['./standard-teaser.component.scss']
})
export class StandardTeaserComponent implements OnInit {
  icon;
  ctas;
  desc;
  tags;
  tileImg;
  title;
  tileVideoSource;
  tileVideoURL;
  sttheme;
  ratings;
  @Input() data;
  @Input() theme;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const ratingsData = {
      ratings: '0',
      noofratings: '0',
      noofreviews: '0'
    };
    this.icon = this.data.icon;
    this.ctas = this.data.cta;
    this.desc = this.getTrimmedData(this.trimStr(this.data.desc || ''), 100);
    this.tags = this.data.tags;
    this.tileImg = this.data.tileImg;
    this.title = this.getTrimmedData(this.trimStr(this.data.title || ''), 40);
    this.ratings = this.data.ratingsData || ratingsData;
    this.sttheme = this.theme;
    if ((this.data.tileVideo || {}).source && (this.data.tileVideo || {}).url) {
      this.tileVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.tileVideo.url);
      this.tileVideoSource = this.data.tileVideo.source;
    }
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
