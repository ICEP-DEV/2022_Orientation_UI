import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingStComponent } from './tracking-st.component';

describe('TrackingStComponent', () => {
  let component: TrackingStComponent;
  let fixture: ComponentFixture<TrackingStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingStComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
