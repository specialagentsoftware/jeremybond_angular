import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondAddressComponent } from './bond-address.component';

describe('BondAddressComponent', () => {
  let component: BondAddressComponent;
  let fixture: ComponentFixture<BondAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
