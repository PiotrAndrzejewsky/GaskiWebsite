import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Room} from "../../../core/models/room.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoomsService} from "../../../core/services/rooms.service";
import {Subject, takeUntil} from "rxjs";

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
        private roomsService: RoomsService
    ) {}

    ngOnInit() {
        this.fetchRooms();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onDeleteClick(index: number): void {
        // Handle delete logic for the room at the specified index
        // You can use this.data.splice(index, 1) to remove the room from the array
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
