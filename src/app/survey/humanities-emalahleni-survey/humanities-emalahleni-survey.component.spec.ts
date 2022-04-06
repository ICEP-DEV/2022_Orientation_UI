import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesEmalahleniSurveyComponent } from './humanities-emalahleni-survey.component';

describe('HumanitiesEmalahleniSurveyComponent', () => {
  let component: HumanitiesEmalahleniSurveyComponent;
  let fixture: ComponentFixture<HumanitiesEmalahleniSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesEmalahleniSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesEmalahleniSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
