import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRouterComponent } from './budget-router.component';

describe('BudgetRouterComponent', () => {
  let component: BudgetRouterComponent;
  let fixture: ComponentFixture<BudgetRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetRouterComponent]
    });
    fixture = TestBed.createComponent(BudgetRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
