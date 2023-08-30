import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceDetailComponent } from './race-detail.component';

describe('RaceDetailComponent', () => {
  let component: RaceDetailComponent;
  let fixture: ComponentFixture<RaceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceDetailComponent],
    });
    fixture = TestBed.createComponent(RaceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // £ test unitaire
  it('should return a random move', () => {
    const move = component.getRandomMove();
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThan(4);
  });
});
