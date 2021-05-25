import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLandComponent } from './show-land.component';

describe('ShowLandComponent', () => {
  let component: ShowLandComponent;
  let fixture: ComponentFixture<ShowLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
