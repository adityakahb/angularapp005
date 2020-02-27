import { Component, OnInit, Input } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  thisDate = '';
  @Input() data;
  constructor() { }

  ngOnInit() {
    this.thisDate = this.getDate(((this.data || {}).published || {}).date || '');
  }
  getDate(str) {
    try {
      let tdate = new Date(str);
      return tdate.getUTCFullYear() + '-' + (tdate.getUTCMonth() + 1) + '-' + tdate.getUTCDate();
    } catch (e) {
      return '';
    }
  }
}
