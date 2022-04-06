import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoartsComponent } from './foarts.component';

describe('FoartsComponent', () => {
  let component: FoartsComponent;
  let fixture: ComponentFixture<FoartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
