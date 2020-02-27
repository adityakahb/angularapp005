import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorTeaserComponent } from './author-teaser.component';

describe('AuthorTeaserComponent', () => {
  let component: AuthorTeaserComponent;
  let fixture: ComponentFixture<AuthorTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
