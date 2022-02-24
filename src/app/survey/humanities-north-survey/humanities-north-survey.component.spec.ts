import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesNorthSurveyComponent } from './humanities-north-survey.component';

describe('HumanitiesNorthSurveyComponent', () => {
  let component: HumanitiesNorthSurveyComponent;
  let fixture: ComponentFixture<HumanitiesNorthSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesNorthSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesNorthSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
