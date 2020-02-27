import { Component, OnInit } from '@angular/core';
declare const require: any;
let recipeJson = require('./../../data/recipe.json');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private articleData;
  constructor() { }

  ngOnInit() {
    this.articleData = recipeJson;
  }

  getSectionClass(classname) {
    if ((classname || '').indexOf('flaticon') === -1) {
      return false;
    }
    return true;
  }
}
