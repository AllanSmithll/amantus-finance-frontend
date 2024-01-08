import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtRouterComponent } from './debt-router.component';

describe('DebtRouterComponent', () => {
  let component: DebtRouterComponent;
  let fixture: ComponentFixture<DebtRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebtRouterComponent]
    });
    fixture = TestBed.createComponent(DebtRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
