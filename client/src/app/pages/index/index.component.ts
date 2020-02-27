import { Component, OnInit } from '@angular/core';
declare const require: any;
let indexJson = require('./../../data/index.json');

// let spDevJson = require('./../../data/_sponsored-dev.json');
// let epDevJson = require('./../../data/_enhanced-dev.json');

// http://lcnas11q-con-23.portal.webmd.com:8080/solr/phydir_a/select?fl=location_nimvs%2Cq_specialty_id&fq=ishidden%3Afalse&q=profiletype_s%3ASponsored&rows=1000
// let spQaPhydrAJson = require('./../../data/_sponsored-qa-phydr-a.json');
// http://lcnas11q-con-23.portal.webmd.com:8080/solr/phydir_a/select?fl=location_nimvs%2Cq_specialty_id&fq=ishidden%3Afalse&q=profiletype_s%3AEnhanced&rows=1000
// let epQaPhydrAJson = require('./../../data/_enhanced-qa-phydr-a.json');
// http://lcnas11q-con-23.portal.webmd.com:8080/solr/phydir_b/select?fl=location_nimvs%2Cq_specialty_id&fq=ishidden%3Afalse&q=profiletype_s%3ASponsored&rows=1000
// let spQaPhydrBJson = require('./../../data/_sponsored-qa-phydr-b.json');
// http://lcnas11q-con-23.portal.webmd.com:8080/solr/phydir_b/select?fl=location_nimvs%2Cq_specialty_id&fq=ishidden%3Afalse&q=profiletype_s%3AEnhanced&rows=1000
// let epQaPhydrBJson = require('./../../data/_enhanced-qa-phydr-b.json');

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  indexData;
  constructor() { }

  ngOnInit() {
    // this.generateData(epQaPhydrBJson);
    this.indexData = indexJson;
  }

  generateData(json) {
    let arr = (((json || {}).response || {}).docs || []);
    let data = '';
    for (let i = 0; i < arr.length; i++) {
      let sp = (arr[i].q_specialty_id || []);
      let ge = (arr[i].location_nimvs || []);
      for (let j = 0; j< ge.length; j++) {
        let gej = JSON.parse(ge[j]);
        if (gej.geolocation) {
          let geo = gej.geolocation;
          if (gej.geolocation !== '0,0') {
            for (let k=0; k<sp.length;k++) {
              data += geo + ',' + sp[k] + '\n';
            }
          }
        }
      }
    }
    console.log('=======================================');
    console.log(data);
    console.log('=======================================');
  }
}
