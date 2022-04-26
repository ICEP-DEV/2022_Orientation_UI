import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeeteamComponent } from './meeteam.component';

describe('MeeteamComponent', () => {
  let component: MeeteamComponent;
  let fixture: ComponentFixture<MeeteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeeteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeeteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
