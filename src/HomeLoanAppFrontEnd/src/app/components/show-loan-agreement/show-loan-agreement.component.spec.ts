import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanAgreementComponent } from './show-loan-agreement.component';

describe('ShowLoanAgreementComponent', () => {
  let component: ShowLoanAgreementComponent;
  let fixture: ComponentFixture<ShowLoanAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLoanAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLoanAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
