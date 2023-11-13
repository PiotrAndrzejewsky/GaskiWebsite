import {Component, Inject} from '@angular/core';
import {Room} from "../../../core/models/room.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent {
    constructor(
        public dialogRef: MatDialogRef<ListRoomsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Room[]
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    onDeleteClick(index: number): void {
        // Handle delete logic for the room at the specified index
        // You can use this.data.splice(index, 1) to remove the room from the array
    }
}
