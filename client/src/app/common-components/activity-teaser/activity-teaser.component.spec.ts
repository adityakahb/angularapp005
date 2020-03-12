import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTeaserComponent } from './activity-teaser.component';

describe('ActivityTeaserComponent', () => {
  let component: ActivityTeaserComponent;
  let fixture: ComponentFixture<ActivityTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityTeaserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
