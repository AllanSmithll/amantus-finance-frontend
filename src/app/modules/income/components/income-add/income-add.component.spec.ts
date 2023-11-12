import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAddComponent } from './income-add.component';

describe('IncomeAddComponent', () => {
  let component: IncomeAddComponent;
  let fixture: ComponentFixture<IncomeAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeAddComponent]
    });
    fixture = TestBed.createComponent(IncomeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
