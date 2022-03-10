import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlkComponent } from './plk.component';

describe('PlkComponent', () => {
  let component: PlkComponent;
  let fixture: ComponentFixture<PlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
