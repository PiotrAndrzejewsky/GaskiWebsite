import {Component, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReservationService} from "../core/services/reservation.service";
import {AddReservationDialogComponent} from "./components/add-reservation-dialog/add-reservation-dialog.component";
import {filter, Subject, switchMap, take, takeUntil} from "rxjs";
import {RoomsService} from "../core/services/rooms.service";
import {AddRoomDialogComponent} from "./components/add-room-dialog/add-room-dialog.component";
import {AddFacilitieDialogComponent} from "./components/add-facilitie-dialog/add-facilitie-dialog.component";
import {FacilitiesService} from "../core/services/facilities.service";
import {ListRoomsComponent} from "./components/list-rooms/list-rooms.component";
import {ListFacilitesDialogComponent} from "./components/list-facilites-dialog/list-facilites-dialog.component";

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnDestroy {
    private $unSubscribe = new Subject<void>();

    constructor(private dialog: MatDialog, private reservationService: ReservationService, private roomsService: RoomsService, private facilitiesService: FacilitiesService) {
    }

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

    openAddNewRoomDialog() {

        const dialogRef = this.dialog.open(AddRoomDialogComponent);

        dialogRef.afterClosed().pipe(
            take(1),
            filter(res => !!res),
            switchMap((newRoom) => {
                return this.roomsService.addNewRoom(newRoom)
            })
        ).pipe(
            takeUntil(this.$unSubscribe)
        ).subscribe({
            next: (res) => {
                //TODO send success message
            },
            error: (err) => {
                //TODO send rejection message
            }
        })
    }

    openAddNewFacilitieDialog() {
        const dialogRef = this.dialog.open(AddFacilitieDialogComponent);

        dialogRef.afterClosed().pipe(
            take(1),
            filter(res => !!res),
            switchMap((newFacilite) => {
                return this.facilitiesService.addNewFacilitie(newFacilite);
            })
        ).pipe(
            takeUntil(this.$unSubscribe)
        ).subscribe({
            next: (res) => {
                //TODO send success messeage
            },
            error: (error) => {
                //TODO send rejection messeage
            }
        })
    }

    openListRoomsDialog() {
        const dialogRef = this.dialog.open(ListRoomsComponent);

    }

    openListFacilitiesDialog() {
        const dialogRef = this.dialog.open(ListFacilitesDialogComponent);

    }

    ngOnDestroy() {
        this.$unSubscribe.next();
        this.$unSubscribe.unsubscribe();
    }



}
