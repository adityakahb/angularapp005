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
  tag;
  @Input() data;
  @Input() theme;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const ratingsData = {
      ratings: '0',
      noofratings: '0',
      noofreviews: '0'
    };
    let data = this.data || {};
    this.icon = data.icon;
    this.ctas = data.cta;
    this.desc = this.getTrimmedData(this.trimStr(data.desc || ''), 160);
    this.tags = data.tags;
    this.tileImg = data.tileImg;
    this.title = this.getTrimmedData(this.trimStr(data.title || ''), 40);
    this.ratings = data.ratingsData || ratingsData;
    this.tag = data.tag || 'h6';
    this.sttheme = this.theme;
    if ((data.tileVideo || {}).source && (data.tileVideo || {}).url) {
      this.tileVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(data.tileVideo.url);
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
