import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDescriptonMobileComponent } from './facility-descripton-mobile.component';

describe('FacilityDescriptonMobileComponent', () => {
  let component: FacilityDescriptonMobileComponent;
  let fixture: ComponentFixture<FacilityDescriptonMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityDescriptonMobileComponent]
    });
    fixture = TestBed.createComponent(FacilityDescriptonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
