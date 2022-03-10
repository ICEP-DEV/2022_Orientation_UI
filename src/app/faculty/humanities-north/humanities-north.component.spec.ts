import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesNorthComponent } from './humanities-north.component';

describe('HumanitiesNorthComponent', () => {
  let component: HumanitiesNorthComponent;
  let fixture: ComponentFixture<HumanitiesNorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesNorthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
