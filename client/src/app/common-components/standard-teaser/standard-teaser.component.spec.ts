import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardTeaserComponent } from './standard-teaser.component';

describe('StandardTeaserComponent', () => {
  let component: StandardTeaserComponent;
  let fixture: ComponentFixture<StandardTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StandardTeaserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
