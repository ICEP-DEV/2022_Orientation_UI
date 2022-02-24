import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbombelaComponent } from './mbombela.component';

describe('MbombelaComponent', () => {
  let component: MbombelaComponent;
  let fixture: ComponentFixture<MbombelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbombelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbombelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
