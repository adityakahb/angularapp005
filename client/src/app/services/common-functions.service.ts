import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {
  private cbp = 'xs';
  constructor() { }
  setCBP(value) {
    this.cbp = value;
  }
  getCBP() {
    return this.cbp;
  }
}
