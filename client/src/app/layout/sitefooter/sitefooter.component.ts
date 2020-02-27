import { Component, OnInit } from '@angular/core';
declare const require: any;

let footerJson = require('./../../data/footer.json');

@Component({
  selector: 'app-sitefooter',
  templateUrl: './sitefooter.component.html',
  styleUrls: ['./sitefooter.component.scss']
})
export class SitefooterComponent implements OnInit {
  private footerData;
  constructor() { }

  ngOnInit() {
    this.footerData = footerJson;
  }

}
