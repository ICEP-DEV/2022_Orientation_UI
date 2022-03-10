import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsMbombelaSurveyComponent } from './economics-mbombela-survey.component';

describe('EconomicsMbombelaSurveyComponent', () => {
  let component: EconomicsMbombelaSurveyComponent;
  let fixture: ComponentFixture<EconomicsMbombelaSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicsMbombelaSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsMbombelaSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
