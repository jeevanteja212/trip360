import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { flightBookComponent } from './flightBook.component';

describe('LoginComponent', () => {
  let component: flightBookComponent;
  let fixture: ComponentFixture<flightBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ flightBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(flightBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
