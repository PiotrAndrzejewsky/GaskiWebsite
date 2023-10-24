import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomDetailsComponent} from "./rooms/components/room-details/room-details.component";
import {WelcomePage} from "./welcome-page/welcome-page.component";
import {ReservationSummaryComponent} from "./reservation-summary/reservation-summary.component";

const routes: Routes = [
    { path: 'rooms/:name', component: RoomDetailsComponent },
    { path: 'summary', component: ReservationSummaryComponent},
    { path: '', component: WelcomePage},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
