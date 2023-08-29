import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ImageSlotsComponent } from './image-slots/image-slots.component';
import { FacilityDescriptionComponent } from './facility-description/facility-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacilityDescriptionMobileComponent } from './facility-descripton-mobile/facility-description-mobile.component';
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { BigImageComponent } from './big-image/big-image.component';
import {
    getDescription,
    GetImageLink, GetImageSrc,
    GetIsSelectedValue,
    GetIsVisibleValue,
    GetKeyValue,
    GetTitlePipe
} from "./image-slots/pipes";
import { GetSelectedImageLinkPipe } from './big-image/utilities/get-selected-image-link.pipe';

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
      GetSelectedImageLinkPipe
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
