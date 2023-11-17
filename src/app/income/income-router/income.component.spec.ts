import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeRouterComponent } from './income.component';

describe('IncomeComponent', () => {
  let component: IncomeRouterComponent;
  let fixture: ComponentFixture<IncomeRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeRouterComponent]
    });
    fixture = TestBed.createComponent(IncomeRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
