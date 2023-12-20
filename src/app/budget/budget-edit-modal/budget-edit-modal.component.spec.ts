import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEditModalComponent } from './budget-edit-modal.component';

describe('BudgetEditModalComponent', () => {
  let component: BudgetEditModalComponent;
  let fixture: ComponentFixture<BudgetEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetEditModalComponent]
    });
    fixture = TestBed.createComponent(BudgetEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
