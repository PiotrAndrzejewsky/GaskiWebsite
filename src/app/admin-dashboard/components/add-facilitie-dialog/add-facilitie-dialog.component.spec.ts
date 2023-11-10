import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacilitieDialogComponent } from './add-facilitie-dialog.component';

describe('AddFacilitieDialogComponent', () => {
  let component: AddFacilitieDialogComponent;
  let fixture: ComponentFixture<AddFacilitieDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFacilitieDialogComponent]
    });
    fixture = TestBed.createComponent(AddFacilitieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
