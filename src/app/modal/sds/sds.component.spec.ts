import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsComponent } from './sds.component';

describe('SdsComponent', () => {
  let component: SdsComponent;
  let fixture: ComponentFixture<SdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
