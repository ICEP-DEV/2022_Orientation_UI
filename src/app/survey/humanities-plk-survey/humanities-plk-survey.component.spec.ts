import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesPlkSurveyComponent } from './humanities-plk-survey.component';

describe('HumanitiesPlkSurveyComponent', () => {
  let component: HumanitiesPlkSurveyComponent;
  let fixture: ComponentFixture<HumanitiesPlkSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesPlkSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesPlkSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
