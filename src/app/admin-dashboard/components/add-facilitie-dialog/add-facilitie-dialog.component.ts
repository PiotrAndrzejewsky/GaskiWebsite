import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Facilitie} from "../../../core/models/facilitie.model";

@Component({
    selector: 'app-add-facilitie-dialog',
    templateUrl: './add-facilitie-dialog.component.html',
    styleUrls: ['./add-facilitie-dialog.component.scss']
})
export class AddFacilitieDialogComponent  {
    facilityForm: FormGroup = this.fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            src: ['', [Validators.required]]
        });

    constructor( public dialogRef: MatDialogRef<AddFacilitieDialogComponent>, private fb: FormBuilder) {}



    onCancel(): void {
        this.dialogRef.close();
    }

    onSave() {
        if(this.facilityForm.invalid)
            return

        let newFacilitie: Facilitie = this.facilityForm.value;
        this.dialogRef.close(newFacilitie);
    }

}
