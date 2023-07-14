import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ImageSlotsComponent } from './image-slots/image-slots.component';
import { FacilityDescriptionComponent } from './facility-description/facility-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacilityDescriptonMobileComponent } from './facility-descripton-mobile/facility-descripton-mobile.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    ImageSlotsComponent,
    FacilityDescriptionComponent,
    FacilityDescriptonMobileComponent
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
