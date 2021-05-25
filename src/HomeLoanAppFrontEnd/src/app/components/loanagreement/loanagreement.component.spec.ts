import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanagreementComponent } from './loanagreement.component';

describe('LoanagreementComponent', () => {
  let component: LoanagreementComponent;
  let fixture: ComponentFixture<LoanagreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanagreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
