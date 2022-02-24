import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesEmalahleniComponent } from './humanities-emalahleni.component';

describe('HumanitiesEmalahleniComponent', () => {
  let component: HumanitiesEmalahleniComponent;
  let fixture: ComponentFixture<HumanitiesEmalahleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesEmalahleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesEmalahleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
