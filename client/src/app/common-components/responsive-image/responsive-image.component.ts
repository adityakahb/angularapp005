import { CommonFunctionsService } from './../../services/common-functions.service';
import { Component, Input, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

const imgArr = ['xs', 'xs2', 'sm', 'sm2', 'md', 'md2', 'lg', 'lg2', 'xl', 'xl2'];
let index = 0;

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss']
})
export class ResponsiveImageComponent implements AfterViewChecked {

  @Input() stretch = false;
  @Input() imgData = {};

  private _cbp;
  private currentImg;

  constructor(private cdRef:ChangeDetectorRef, private bpService: CommonFunctionsService) {}

  ngAfterViewChecked() {
    this._cbp = this.bpService.getCBP();
    if (this.imgData) {
      index = imgArr.indexOf(this._cbp);
      while (index >= 0) {
        if (this.imgData[imgArr[index]]) {
          this.currentImg = this.imgData[imgArr[index]];
          break;
        }
        index--;
      }
    }
    this.cdRef.detectChanges();
  }
}
