import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculmDevComponent } from './curriculm-dev.component';

describe('CurriculmDevComponent', () => {
  let component: CurriculmDevComponent;
  let fixture: ComponentFixture<CurriculmDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculmDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculmDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
