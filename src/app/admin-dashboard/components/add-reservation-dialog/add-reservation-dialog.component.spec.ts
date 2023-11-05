import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservationDialogComponent } from './add-reservation-dialog.component';

describe('AddReservationDialogComponent', () => {
  let component: AddReservationDialogComponent;
  let fixture: ComponentFixture<AddReservationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReservationDialogComponent]
    });
    fixture = TestBed.createComponent(AddReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
