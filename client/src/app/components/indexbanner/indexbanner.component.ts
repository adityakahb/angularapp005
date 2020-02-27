import { Component, OnInit, Input } from '@angular/core';

declare var require: any;

let bannerJson = require('./../../data/indexbanner.json');

@Component({
  selector: 'app-indexbanner',
  templateUrl: './indexbanner.component.html',
  styleUrls: ['./indexbanner.component.scss']
})
export class IndexbannerComponent implements OnInit {
  bannerData = {};
  cbp = 'xs';
  constructor() { }

  ngOnInit() {
    if ((bannerJson || []).length > 0) {
      this.bannerData = bannerJson[Math.floor(Math.random() * bannerJson.length)];
    }
  }
  
  updateImgSrc(value) {
    this.cbp = value;
  }
}
