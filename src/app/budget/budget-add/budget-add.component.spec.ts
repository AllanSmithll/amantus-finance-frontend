import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAddComponent } from './budget-add.component';

describe('BudgetAddComponent', () => {
  let component: BudgetAddComponent;
  let fixture: ComponentFixture<BudgetAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetAddComponent]
    });
    fixture = TestBed.createComponent(BudgetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
