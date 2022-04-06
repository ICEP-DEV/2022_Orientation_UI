import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesComponent } from './humanities.component';

describe('HumanitiesComponent', () => {
  let component: HumanitiesComponent;
  let fixture: ComponentFixture<HumanitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
