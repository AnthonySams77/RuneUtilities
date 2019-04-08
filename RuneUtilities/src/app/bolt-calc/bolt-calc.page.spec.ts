import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoltCalcPage } from './bolt-calc.page';

describe('BoltCalcPage', () => {
  let component: BoltCalcPage;
  let fixture: ComponentFixture<BoltCalcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoltCalcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoltCalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
