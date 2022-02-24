import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsPlkSurveyComponent } from './economics-plk-survey.component';

describe('EconomicsPlkSurveyComponent', () => {
  let component: EconomicsPlkSurveyComponent;
  let fixture: ComponentFixture<EconomicsPlkSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicsPlkSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsPlkSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
