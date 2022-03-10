import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlkIctComponent } from './plk-ict.component';

describe('PlkIctComponent', () => {
  let component: PlkIctComponent;
  let fixture: ComponentFixture<PlkIctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlkIctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlkIctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
