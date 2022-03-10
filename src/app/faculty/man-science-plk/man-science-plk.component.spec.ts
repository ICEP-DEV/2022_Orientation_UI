import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSciencePlkComponent } from './man-science-plk.component';

describe('ManSciencePlkComponent', () => {
  let component: ManSciencePlkComponent;
  let fixture: ComponentFixture<ManSciencePlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManSciencePlkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManSciencePlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
