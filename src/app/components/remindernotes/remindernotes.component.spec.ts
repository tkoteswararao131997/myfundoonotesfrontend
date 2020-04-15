import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindernotesComponent } from './remindernotes.component';

describe('RemindernotesComponent', () => {
  let component: RemindernotesComponent;
  let fixture: ComponentFixture<RemindernotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindernotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindernotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
