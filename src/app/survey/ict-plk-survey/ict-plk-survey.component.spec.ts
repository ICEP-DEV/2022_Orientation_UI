import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctPlkSurveyComponent } from './ict-plk-survey.component';

describe('IctPlkSurveyComponent', () => {
  let component: IctPlkSurveyComponent;
  let fixture: ComponentFixture<IctPlkSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctPlkSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IctPlkSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
