import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctEmalahleniSurveyComponent } from './ict-emalahleni-survey.component';

describe('IctEmalahleniSurveyComponent', () => {
  let component: IctEmalahleniSurveyComponent;
  let fixture: ComponentFixture<IctEmalahleniSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctEmalahleniSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IctEmalahleniSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
