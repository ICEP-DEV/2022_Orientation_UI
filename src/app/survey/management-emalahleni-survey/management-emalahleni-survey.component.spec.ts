import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEmalahleniSurveyComponent } from './management-emalahleni-survey.component';

describe('ManagementEmalahleniSurveyComponent', () => {
  let component: ManagementEmalahleniSurveyComponent;
  let fixture: ComponentFixture<ManagementEmalahleniSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementEmalahleniSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEmalahleniSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
