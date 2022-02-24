import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmalahleniIctComponent } from './emalahleni-ict.component';

describe('EmalahleniIctComponent', () => {
  let component: EmalahleniIctComponent;
  let fixture: ComponentFixture<EmalahleniIctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmalahleniIctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmalahleniIctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
