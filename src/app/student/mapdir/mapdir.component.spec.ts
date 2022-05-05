import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdirComponent } from './mapdir.component';

describe('MapdirComponent', () => {
  let component: MapdirComponent;
  let fixture: ComponentFixture<MapdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapdirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
