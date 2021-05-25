import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanapplicationComponent } from './show-loanapplication.component';

describe('ShowLoanapplicationComponent', () => {
  let component: ShowLoanapplicationComponent;
  let fixture: ComponentFixture<ShowLoanapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLoanapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLoanapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
