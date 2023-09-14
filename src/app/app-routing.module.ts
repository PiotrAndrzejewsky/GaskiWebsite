import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomDetailsComponent} from "./room-details/room-details.component";
import {AppComponent} from "./app.component";
import {OverallComponent} from "./overall/overall.component";

const routes: Routes = [
    { path: 'rooms/:name', component: RoomDetailsComponent },
    { path: '', component: OverallComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
