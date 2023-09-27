import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDescriptionMobileComponent } from './facility-description-mobile.component';

describe('FacilityDescriptonMobileComponent', () => {
  let component: FacilityDescriptionMobileComponent;
  let fixture: ComponentFixture<FacilityDescriptionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityDescriptionMobileComponent]
    });
    fixture = TestBed.createComponent(FacilityDescriptionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
