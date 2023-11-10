import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

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
    });}


    onSubmit() {
        // Handle the form submission here
        // You can access form values using this.roomForm.value
        console.log(this?.roomForm?.value);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
