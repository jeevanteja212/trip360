import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { autofillFlightComponent } from './autofillFlight.component';

describe('LoginComponent', () => {
  let component: autofillFlightComponent;
  let fixture: ComponentFixture<autofillFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ autofillFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(autofillFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
