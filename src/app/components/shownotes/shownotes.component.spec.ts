import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownotesComponent } from './shownotes.component';

describe('ShownotesComponent', () => {
  let component: ShownotesComponent;
  let fixture: ComponentFixture<ShownotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShownotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
