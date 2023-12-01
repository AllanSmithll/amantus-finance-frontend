import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAddComponent } from './expense-add.component';

describe('ExpenseAddComponent', () => {
  let component: ExpenseAddComponent;
  let fixture: ComponentFixture<ExpenseAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseAddComponent]
    });
    fixture = TestBed.createComponent(ExpenseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
