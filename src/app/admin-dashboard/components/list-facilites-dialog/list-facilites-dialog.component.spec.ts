import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacilitesDialogComponent } from './list-facilites-dialog.component';

describe('ListFacilitesDialogComponent', () => {
  let component: ListFacilitesDialogComponent;
  let fixture: ComponentFixture<ListFacilitesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFacilitesDialogComponent]
    });
    fixture = TestBed.createComponent(ListFacilitesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
