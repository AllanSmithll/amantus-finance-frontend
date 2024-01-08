import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtEditModalComponent } from './debt-edit-modal.component';

describe('DebtEditModalComponent', () => {
  let component: DebtEditModalComponent;
  let fixture: ComponentFixture<DebtEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebtEditModalComponent]
    });
    fixture = TestBed.createComponent(DebtEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
