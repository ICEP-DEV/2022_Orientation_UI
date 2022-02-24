import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsPlkComponent } from './economics-plk.component';

describe('EconomicsPlkComponent', () => {
  let component: EconomicsPlkComponent;
  let fixture: ComponentFixture<EconomicsPlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicsPlkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsPlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
