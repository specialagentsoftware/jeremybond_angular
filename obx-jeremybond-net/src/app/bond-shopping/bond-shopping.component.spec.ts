import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondShoppingComponent } from './bond-shopping.component';

describe('BondShoppingComponent', () => {
  let component: BondShoppingComponent;
  let fixture: ComponentFixture<BondShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
