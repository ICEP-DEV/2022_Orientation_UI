import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsSurveyComponent } from './economics-survey.component';

describe('EconomicsSurveyComponent', () => {
  let component: EconomicsSurveyComponent;
  let fixture: ComponentFixture<EconomicsSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicsSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
