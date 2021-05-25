import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanapplicationComponent } from './update-loanapplication.component';

describe('UpdateLoanapplicationComponent', () => {
  let component: UpdateLoanapplicationComponent;
  let fixture: ComponentFixture<UpdateLoanapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLoanapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLoanapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
