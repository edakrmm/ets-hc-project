import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassedEventsComponent } from './passed-events.component';

describe('PassedEventsComponent', () => {
  let component: PassedEventsComponent;
  let fixture: ComponentFixture<PassedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassedEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
