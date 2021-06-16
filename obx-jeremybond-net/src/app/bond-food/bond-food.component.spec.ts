import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondFoodComponent } from './bond-food.component';

describe('BondFoodComponent', () => {
  let component: BondFoodComponent;
  let fixture: ComponentFixture<BondFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BondFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
