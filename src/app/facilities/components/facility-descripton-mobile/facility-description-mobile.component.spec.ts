import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDescriptionMobileComponent } from './facility-description-mobile.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('FacilityDescriptonMobileComponent', () => {
  let component: FacilityDescriptionMobileComponent;
  let fixture: ComponentFixture<FacilityDescriptionMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityDescriptionMobileComponent],
        imports: [BrowserAnimationsModule],
        schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FacilityDescriptionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
