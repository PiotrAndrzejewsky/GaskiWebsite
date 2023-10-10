import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDescriptionComponent } from './facility-description.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('FacilityDescriptionComponent', () => {
  let component: FacilityDescriptionComponent;
  let fixture: ComponentFixture<FacilityDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
            declarations: [FacilityDescriptionComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(FacilityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
