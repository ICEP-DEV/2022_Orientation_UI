import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankuwaComponent } from './rankuwa.component';

describe('RankuwaComponent', () => {
  let component: RankuwaComponent;
  let fixture: ComponentFixture<RankuwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankuwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankuwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
