import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationInfoComponent } from './reservation-info.component';

describe('ReservationInfoComponent', () => {
  let component: ReservationInfoComponent;
  let fixture: ComponentFixture<ReservationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationInfoComponent]
    });
    fixture = TestBed.createComponent(ReservationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
