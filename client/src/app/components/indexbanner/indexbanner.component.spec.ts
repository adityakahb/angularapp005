import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexbannerComponent } from './indexbanner.component';

describe('IndexbannerComponent', () => {
  let component: IndexbannerComponent;
  let fixture: ComponentFixture<IndexbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexbannerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
