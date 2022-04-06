import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSciencePlkSurveyComponent } from './man-science-plk-survey.component';

describe('ManSciencePlkSurveyComponent', () => {
  let component: ManSciencePlkSurveyComponent;
  let fixture: ComponentFixture<ManSciencePlkSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManSciencePlkSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManSciencePlkSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
