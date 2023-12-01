import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRouterComponent } from './expense-router.component';

describe('ExpenseRouterComponent', () => {
  let component: ExpenseRouterComponent;
  let fixture: ComponentFixture<ExpenseRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseRouterComponent]
    });
    fixture = TestBed.createComponent(ExpenseRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
