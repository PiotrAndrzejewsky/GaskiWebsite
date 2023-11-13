import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Reservation, ReservationWithContactData} from "../../../core/models/reservedDays.model";
import {Room} from "../../../core/models/room.model";

@Component({
    selector: 'app-add-reservation-dialog',
    templateUrl: './add-reservation-dialog.component.html',
})
export class AddReservationDialogComponent {
    reservationForm: FormGroup;
    public selectedRoom?: Room;

    constructor(
        private dialogRef: MatDialogRef<AddReservationDialogComponent>,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: Room[],
        private cdr: ChangeDetectorRef
    ) {
        this.reservationForm = this.formBuilder.group({
            firstDay: ['', Validators.required],
            lastDay: ['', Validators.required],
            roomName: ['', Validators.required],
            perDayCost: ['', Validators.required],
            serviceCost: ['', Validators.required],
            fullName: ['', Validators.required],
            telephone: ['', Validators.required],
            email: ['', Validators.required, Validators.email],
        });
    }

    submitForm() {
        if (this.reservationForm.valid) {
            const newReservation: ReservationWithContactData = {
                days: {firstDay: this.reservationForm.value.firstDay, lastDay: this.reservationForm.value.lastDay},
                roomName: JSON.parse(this.reservationForm.value.roomName).roomName, // here value is stringify json, so needs to be parsed
                perDayCost: this.reservationForm.value.perDayCost,
                serviceCost: this.reservationForm.value.serviceCost,
                fullName: this.reservationForm.value.fullName,
                telephone: this.reservationForm.value.telephone,
                email: this.reservationForm.value.email,
            };

            this.dialogRef.close(newReservation);
        }
    }

    cancel() {
        this.dialogRef.close();
    }


    patchFormRoomCosts(room: string) {
        this.reservationForm.patchValue({serviceCost: 200, perDayCost: JSON.parse(room).basePricePerNight});

    }



}
