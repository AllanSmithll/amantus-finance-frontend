import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeEditModalComponent } from './income-edit-modal.component';

describe('IncomeEditModalComponent', () => {
  let component: IncomeEditModalComponent;
  let fixture: ComponentFixture<IncomeEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeEditModalComponent]
    });
    fixture = TestBed.createComponent(IncomeEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
