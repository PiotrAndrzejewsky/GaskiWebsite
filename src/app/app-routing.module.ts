import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomDetailsComponent} from "./rooms/components/room-details/room-details.component";
import {WelcomePage} from "./welcome-page/welcome-page.component";
import {ReservationSummaryComponent} from "./reservation-summary/reservation-summary.component";
import {ThankYouComponent} from "./thank-you/thank-you.component";
import {reservationGuard} from "./core/guards/reservation.guard";
import {reservationProccesUnfinishedGuard} from "./core/guards/reservation-procces-unfinished.guard";
import {reservationProccesFinishedGuard} from "./core/guards/reservation-procces-finished.guard";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {adminTokenGuard} from "./core/guards/admin-token.guard";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
    { path: 'rooms/:name', component: RoomDetailsComponent },
    { path: 'summary', component: ReservationSummaryComponent, canActivate: [reservationGuard, reservationProccesUnfinishedGuard]},
    { path: 'thanks', component: ThankYouComponent, canActivate: [reservationGuard, reservationProccesFinishedGuard] },
    { path: '973482', component: AdminLoginComponent },
    { path: 'adminDashboard', component: AdminDashboardComponent , canActivate: [adminTokenGuard]},
    { path: '', component: WelcomePage},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
