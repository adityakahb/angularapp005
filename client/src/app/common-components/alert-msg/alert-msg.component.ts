import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.scss']
})
export class AlertMsgComponent implements OnInit {

  @Input() data;

  theme;
  title;
  content;
  icon;
  actions;
  isClosable;

  constructor() { }

  ngOnInit() {
    const data = this.data || {};
    this.theme = data.alertType ? data.alertType : 'light';
    this.title = data.title;
    this.content = data.content;
    this.icon = data.icon;
    this.actions = data.actions || [];
    this.isClosable = data.isClosable === true || data.isClosable === 'true' ? data.isClosable : false;
  }
}
