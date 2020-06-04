import { TestBed } from '@angular/core/testing';

import { ModuleaService } from './modulea.service';

describe('ModuleaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleaService = TestBed.get(ModuleaService);
    expect(service).toBeTruthy();
  });
});
