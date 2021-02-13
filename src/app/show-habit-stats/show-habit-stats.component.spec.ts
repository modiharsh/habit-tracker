import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHabitStatsComponent } from './show-habit-stats.component';

describe('ShowHabitStatsComponent', () => {
  let component: ShowHabitStatsComponent;
  let fixture: ComponentFixture<ShowHabitStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHabitStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHabitStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
