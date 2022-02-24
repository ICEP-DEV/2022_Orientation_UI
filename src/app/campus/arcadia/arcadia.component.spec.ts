import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadiaComponent } from './arcadia.component';

describe('ArcadiaComponent', () => {
  let component: ArcadiaComponent;
  let fixture: ComponentFixture<ArcadiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcadiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
