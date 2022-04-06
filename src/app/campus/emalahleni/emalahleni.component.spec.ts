import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmalahleniComponent } from './emalahleni.component';

describe('EmalahleniComponent', () => {
  let component: EmalahleniComponent;
  let fixture: ComponentFixture<EmalahleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmalahleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmalahleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
