import { TestBed } from '@angular/core/testing';
import { FundoonoteserviceService } from './fundoonoteservice.service';
describe('FundoonoteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundoonoteserviceService = TestBed.get(FundoonoteserviceService);
    expect(service).toBeTruthy();
  });
});
