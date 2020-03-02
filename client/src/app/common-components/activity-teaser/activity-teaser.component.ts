import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-activity-teaser',
  templateUrl: './activity-teaser.component.html',
  styleUrls: ['./activity-teaser.component.scss']
})
export class ActivityTeaserComponent implements OnInit {
  avtarImg;
  activity;
  tileImg;
  tileVideoSource;
  tileVideoURL;
  sttheme;
  @Input() data;
  @Input() theme;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    let data = this.data || {};
    let from = data.from || {};
    let activity = from.activity || {};
    this.avtarImg = from.avtarImg;
    this.tileImg = data.tileImg;
    if (activity) {
      this.activity = this.getActivity(from);
    }
    if ((data.tileVideo || {}).source && (data.tileVideo || {}).url) {
      this.tileVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(data.tileVideo.url);
      this.tileVideoSource = this.data.tileVideo.source;
    }
  }

  getActivity(from) {
    if (from.activity.type === 'ratings') {
      return `<a href="${from.link}" title="${from.name}">${from.name}</a> ${from.activity.info} ${from.activity.stars} ${from.activity.str}${from.activity.end}`;
    }
    if (from.activity.type === 'reviews') {
      return `<a href="${from.link}" title="${from.name}">${from.name}</a> ${from.activity.info} <a href="${from.activity.link.href}" title="${from.activity.link.title}">${from.activity.link.title}</a>`;
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
