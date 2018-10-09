import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarysearchComponent } from './primarysearch.component';

describe('PrimarysearchComponent', () => {
  let component: PrimarysearchComponent;
  let fixture: ComponentFixture<PrimarysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
