import { Component, OnInit } from '@angular/core';
declare const require: any;
let recipeJson = require('./../../data/recipe.json');

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
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
