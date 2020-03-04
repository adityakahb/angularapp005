import { Component, OnInit, Input } from '@angular/core';

declare const $: any;
declare const require: any;

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
    this.bannerData = bannerJson;
    // if ((bannerJson || []).length > 0) {
    //   this.bannerData = bannerJson[Math.floor(Math.random() * bannerJson.length)];
    // }
    if (window && document) {
      window.setTimeout(()=> {
        $('.hero-slider').slick({
          arrows: false,
          autoplay: false,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          speed: 300
        });
      }, 1000);
    }
  }

  updateImgSrc(value) {
    this.cbp = value;
  }
}
