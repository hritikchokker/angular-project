import { TestBed } from '@angular/core/testing';

import { NavbarStatusService } from './navbar-status.service';

describe('NavbarStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarStatusService = TestBed.get(NavbarStatusService);
    expect(service).toBeTruthy();
  });
});
