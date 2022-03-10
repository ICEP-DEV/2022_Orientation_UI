import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesPlkComponent } from './humanities-plk.component';

describe('HumanitiesPlkComponent', () => {
  let component: HumanitiesPlkComponent;
  let fixture: ComponentFixture<HumanitiesPlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesPlkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesPlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
