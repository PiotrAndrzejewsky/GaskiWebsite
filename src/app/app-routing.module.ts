import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomDetailsComponent} from "./rooms/components/room-details/room-details.component";
import {AppComponent} from "./app.component";
import {WelcomePage} from "./welcome-page/welcome-page.component";

const routes: Routes = [
    { path: 'rooms/:name', component: RoomDetailsComponent },
    { path: '', component: WelcomePage},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
