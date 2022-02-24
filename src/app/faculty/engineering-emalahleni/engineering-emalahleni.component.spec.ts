import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringEmalahleniComponent } from './engineering-emalahleni.component';

describe('EngineeringEmalahleniComponent', () => {
  let component: EngineeringEmalahleniComponent;
  let fixture: ComponentFixture<EngineeringEmalahleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringEmalahleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringEmalahleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
