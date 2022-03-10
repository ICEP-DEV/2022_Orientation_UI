import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringSurveyComponent } from './engineering-survey.component';

describe('EngineeringSurveyComponent', () => {
  let component: EngineeringSurveyComponent;
  let fixture: ComponentFixture<EngineeringSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
