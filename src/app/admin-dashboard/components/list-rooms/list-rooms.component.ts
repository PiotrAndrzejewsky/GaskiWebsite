import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Room} from "../../../core/models/room.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoomsService} from "../../../core/services/rooms.service";
import {catchError, of, Subject, switchMap, takeUntil, tap} from "rxjs";
import {ConfirmationService} from "../../../core/services/confirmation.service";

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit, OnDestroy {
    public rooms?: Room[];
    private unSubscribe$ = new Subject<void>();
    constructor(
        public dialogRef: MatDialogRef<ListRoomsComponent>,
        private roomsService: RoomsService,
        private confirmation: ConfirmationService
    ) {}

    ngOnInit() {
        this.fetchRooms();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onDeleteClick(roomName: string): void {

        if(this.confirmation.openConfirmationDialog('Czy chcesz usunąć ' + roomName + ' ?' ))
        {
            this.deleteRoom(roomName);
            this.fetchRooms();
        }

    }


    deleteRoom(roomName: string) {
        this.roomsService.deleteRoom(roomName).pipe(
            takeUntil(this.unSubscribe$),
            catchError((e) => {
                console.log('błąd podczas usuwania pokoju!');
                return of('Nie udało się usunąć pokoju!');
            })

        ).subscribe((res) => {console.log('usunięto pokoj')}, (error) => {console.error(error)});
    }

    fetchRooms() {
        this.roomsService.getAvailableRooms().pipe(
        takeUntil(this.unSubscribe$)
        ).subscribe((res) => {this.rooms = res}, (err) => {})
    }

    ngOnDestroy() {
        this.unSubscribe$.next();
        this.unSubscribe$.unsubscribe();
    }
}
