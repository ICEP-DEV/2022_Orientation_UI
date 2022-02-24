import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringEmalahleniSurveyComponent } from './engineering-emalahleni-survey.component';

describe('EngineeringEmalahleniSurveyComponent', () => {
  let component: EngineeringEmalahleniSurveyComponent;
  let fixture: ComponentFixture<EngineeringEmalahleniSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringEmalahleniSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringEmalahleniSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
