import {Component, OnDestroy} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {ReservationService} from "../core/services/reservation.service";
import {AddReservationDialogComponent} from "./components/add-reservation-dialog/add-reservation-dialog.component";
import {hebrewNumerals} from "@ng-bootstrap/ng-bootstrap/datepicker/hebrew/hebrew";
import {filter, Subject, switchMap, take, takeUntil} from "rxjs";
import {RoomsService} from "../core/services/rooms.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnDestroy {
    private $unSubscribe=new Subject<void>();

    constructor(private dialog: MatDialog, private reservationService: ReservationService, private roomsService : RoomsService) {}

    openAddReservationDialog() {
        this.roomsService.getAvailableRooms().pipe(
            takeUntil(this.$unSubscribe),
            switchMap((res) => {
                const dialogRef = this.dialog.open(AddReservationDialogComponent, {
                    data: res
                });

                return dialogRef.afterClosed().pipe(
                    take(1),
                    filter(res => !!res)
                );
            })
        ).subscribe((res) => this.reservationService.pushReservationToServer(res));
        // when unmocked, this pushreqeust needs to be in body, and response form server must be subscribed
    }


    ngOnDestroy() {
        this.$unSubscribe.next();
        this.$unSubscribe.unsubscribe();
    }

}
