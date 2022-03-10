import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsMbombelaComponent } from './economics-mbombela.component';

describe('EconomicsMbombelaComponent', () => {
  let component: EconomicsMbombelaComponent;
  let fixture: ComponentFixture<EconomicsMbombelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicsMbombelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicsMbombelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
