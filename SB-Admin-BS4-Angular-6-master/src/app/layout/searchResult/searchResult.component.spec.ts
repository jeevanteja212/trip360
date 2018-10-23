import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { searchResultComponent } from './searchResult.component';

describe('LoginComponent', () => {
  let component: searchResultComponent;
  let fixture: ComponentFixture<searchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ searchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(searchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
