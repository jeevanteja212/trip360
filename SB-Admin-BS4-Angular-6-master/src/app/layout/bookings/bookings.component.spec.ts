import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bookingsComponent } from './bookings.component';

describe('LoginComponent', () => {
  let component: bookingsComponent;
  let fixture: ComponentFixture<bookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
