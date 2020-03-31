import { TestBed } from '@angular/core/testing';
import { NoteserviceService } from './notes.service';

describe('NotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteserviceService = TestBed.get(NoteserviceService);
    expect(service).toBeTruthy();
  });
});
