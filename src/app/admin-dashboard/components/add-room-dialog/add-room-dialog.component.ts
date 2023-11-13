import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Room} from "../../../core/models/room.model";

@Component({
    selector: 'app-add-room-dialog',
    templateUrl: './add-room-dialog.component.html',
    styleUrls: ['./add-room-dialog.component.scss']
})
export class AddRoomDialogComponent {

    public roomForm: FormGroup;

    constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddRoomDialogComponent>) {
        this.roomForm = this.fb.group({
            title: ['', Validators.required],
            shortDescription: ['', Validators.required],
            longDescription: ['', Validators.required],
            maximumNumberOfPeopleAllowed: ['', Validators.required],
            basePricePerNight: ['', Validators.required],
            pricePerPerson: ['', Validators.required],
            isPlaceReservable: [false],
            imageLink: ['', Validators.required],
        });
    }


    onSubmit() {

        if (this.roomForm.invalid)
            return

        let newRoom: Room = {
            title: this.roomForm.value.title,
            shortDescription: this.roomForm.value.shortDescription,
            longDescription: this.roomForm.value.longDescription,
            maximumNumberOfPeopleAllowed: this.roomForm.value.maximumNumberOfPeopleAllowed,
            basePricePerNight: this.roomForm.value.basePricePerNight,
            pricePerPerson: this.roomForm.value.pricePerPerson,
            isPlaceReservable: this.roomForm.value.isPlaceReservable,
            imageLink: this.roomForm.value.imageLink, // this will be file list object
        };

        this.dialogRef.close(newRoom);
    }

    onCancel() {
        this.dialogRef.close();
    }
}
