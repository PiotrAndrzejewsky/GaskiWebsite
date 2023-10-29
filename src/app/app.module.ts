import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ImageSlotsComponent } from './facilities/components/image-slots/image-slots.component';
import { FacilityDescriptionComponent } from './facilities/components/facility-description/facility-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacilityDescriptionMobileComponent } from './facilities/components/facility-descripton-mobile/facility-description-mobile.component';
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { BigImageComponent } from './facilities/components/big-image/big-image.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './rooms/components/room/room.component';
import { RoomDetailsComponent } from './rooms/components/room-details/room-details.component';
import { WelcomePage } from './welcome-page/welcome-page.component';
import { PricesComponent } from './facilities/components/prices/prices.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './banner/banner.component';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { ReservationInfoComponent } from './reservation-info/reservation-info.component';
import { CalendarComponent } from './calendar/calendar.component';
import '@angular/common/locales/global/pl';
import {MatButtonModule} from "@angular/material/button";
import { ReservationSummaryComponent } from './reservation-summary/reservation-summary.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CalendarLegendComponent } from './calendar/components/calendar-legend/calendar-legend.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    ImageSlotsComponent,
    FacilityDescriptionComponent,
    FacilityDescriptionMobileComponent,
    FooterComponent,
    BigImageComponent,
      RoomsComponent,
      RoomComponent,
      RoomDetailsComponent,
      WelcomePage,
      PricesComponent,
      NavbarComponent,
      BannerComponent,
      WelcomeTextComponent,
      ReservationInfoComponent,
      CalendarComponent,
      ReservationSummaryComponent,
      ThankYouComponent,
      CalendarLegendComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgOptimizedImage,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule

    ],
    providers: [{provide: LOCALE_ID, useValue: "pl"}],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
