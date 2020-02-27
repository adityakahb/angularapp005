import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angularapp004';
  showSiteHeader = false;
  showSiteFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
// 800x800, 1200x1200, 1440x1200, 2880x1200
// 400x400, 600x600, 720x620, 1440x600
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSiteHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSiteFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }

}