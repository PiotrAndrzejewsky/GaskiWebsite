import { NgModule } from '@angular/core';
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
import {
    getDescription,
    GetImageLink, GetImageSrc,
    GetIsSelectedValue,
    GetIsVisibleValue,
    GetKeyValue,
    GetTitlePipe
} from "./facilities/components/image-slots/pipes";
import { GetSelectedImageLinkPipe } from './facilities/components/big-image/utilities/get-selected-image-link.pipe';
import { GetLinkForSelectedImagePipe } from './facilities/pipes/get-link-for-selected-image.pipe';
import { GetSelectedContentPipe } from './facilities/pipes/get-selected-content.pipe';
import { GetKeysPipe } from './facilities/pipes/get-keys.pipe';
import { TransformToContentKeyPipe } from './facilities/pipes/transform-to-content-key.pipe';
import { GetImageLinkPipe } from './facilities/pipes/get-image-link.pipe';
import { GetSelectedImageTitlePipe } from './facilities/pipes/get-selected-image-title.pipe';
import { GetVisibleContentPipe } from './facilities/pipes/get-visible-content.pipe';
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




@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    ImageSlotsComponent,
    FacilityDescriptionComponent,
    FacilityDescriptionMobileComponent,
    FooterComponent,
    BigImageComponent,
      GetTitlePipe,
      GetImageLink,
      GetIsSelectedValue,
      GetIsVisibleValue,
      GetKeyValue,
      getDescription,
      GetImageSrc,
      GetSelectedImageLinkPipe,
      GetLinkForSelectedImagePipe,
      GetSelectedContentPipe,
      GetKeysPipe,
      TransformToContentKeyPipe,
      GetImageLinkPipe,
      GetSelectedImageTitlePipe,
      GetVisibleContentPipe,
      RoomsComponent,
      RoomComponent,
      RoomDetailsComponent,
      WelcomePage,
      PricesComponent,
      NavbarComponent,
      BannerComponent,
      WelcomeTextComponent,
      ReservationInfoComponent,
      CalendarComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgOptimizedImage,
        MatSidenavModule,
        MatIconModule

    ],
    providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
