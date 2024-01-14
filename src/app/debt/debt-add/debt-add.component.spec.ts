import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtAddComponent } from './debt-add.component';

describe('DebtAddComponent', () => {
  let component: DebtAddComponent;
  let fixture: ComponentFixture<DebtAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebtAddComponent]
    });
    fixture = TestBed.createComponent(DebtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
