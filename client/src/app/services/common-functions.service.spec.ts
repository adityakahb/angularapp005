import { CommonFunctionsService } from './common-functions.service';
import { TestBed } from '@angular/core/testing';

describe('ResponsiveBreakpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonFunctionsService = TestBed.get(CommonFunctionsService);
    expect(service).toBeTruthy();
  });
});
