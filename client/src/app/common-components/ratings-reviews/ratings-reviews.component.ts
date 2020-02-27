import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratings-reviews',
  templateUrl: './ratings-reviews.component.html',
  styleUrls: ['./ratings-reviews.component.scss']
})
export class RatingsReviewsComponent implements OnInit {

  ratings;
  noofreviews;
  noofratings;
  ratingsArr = [];
  @Input() data;

  constructor() { }

  ngOnInit() {
    this.ratings = this.data.ratings;
    this.noofratings = this.data.noofratings;
    this.noofreviews = this.data.noofreviews;
    let arr = [];
    try {
      let r = Math.round(this.ratings * 10) / 10;
      r = parseFloat(r.toFixed(1));
      for (; r > 0.8; r--) {
        arr.push('star');
      }
      if (r >= 0.9) {
        arr.push('star');
      } else if (0.1 <= r && r < 0.8) {
        arr.push('star_half');
      }
      for (let s = arr.length + 1; s<=5; s++) {
        arr.push('star_border');
      }
    } catch (e) {}
    this.ratingsArr = arr;
  }

  get99(val, str, strPlural) {
    try {
      if (parseInt(val, 10) > 99) {
        return '99+ ' + (parseInt(val, 10) > 1 ? strPlural : str);
      }
    } catch (e) {}
    return val + ' ' + (parseInt(val, 10) > 1 ? strPlural : str);
  }
}
