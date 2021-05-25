import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidClientComponent } from './covid-client.component';

describe('CovidClientComponent', () => {
  let component: CovidClientComponent;
  let fixture: ComponentFixture<CovidClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
