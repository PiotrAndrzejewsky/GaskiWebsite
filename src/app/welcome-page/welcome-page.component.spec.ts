import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePage } from './welcome-page.component';
import {BannerComponent} from "../banner/banner.component";
import {WelcomeTextComponent} from "../welcome-text/welcome-text.component";
import {RoomsComponent} from "../rooms/rooms.component";
import {FacilitiesComponent} from "../facilities/facilities.component";
import {ReservationInfoComponent} from "../reservation-info/reservation-info.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('welcome page', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          WelcomePage,

      ],
        schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
