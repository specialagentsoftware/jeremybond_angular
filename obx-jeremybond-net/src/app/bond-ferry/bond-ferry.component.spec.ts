import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondFerryComponent } from './bond-ferry.component';

describe('BondFerryComponent', () => {
  let component: BondFerryComponent;
  let fixture: ComponentFixture<BondFerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondFerryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondFerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
