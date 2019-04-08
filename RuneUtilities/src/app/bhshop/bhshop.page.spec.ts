import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BHShopPage } from './bhshop.page';

describe('BHShopPage', () => {
  let component: BHShopPage;
  let fixture: ComponentFixture<BHShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BHShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BHShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
