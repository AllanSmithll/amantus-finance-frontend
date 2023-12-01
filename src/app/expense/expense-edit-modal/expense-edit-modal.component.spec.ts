import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEditModalComponent } from './expense-edit-modal.component';

describe('ExpenseEditModalComponent', () => {
  let component: ExpenseEditModalComponent;
  let fixture: ComponentFixture<ExpenseEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseEditModalComponent]
    });
    fixture = TestBed.createComponent(ExpenseEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
