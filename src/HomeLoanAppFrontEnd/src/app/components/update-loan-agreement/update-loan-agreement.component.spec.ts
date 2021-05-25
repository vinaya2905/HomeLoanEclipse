import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanAgreementComponent } from './update-loan-agreement.component';

describe('UpdateLoanAgreementComponent', () => {
  let component: UpdateLoanAgreementComponent;
  let fixture: ComponentFixture<UpdateLoanAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLoanAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLoanAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
