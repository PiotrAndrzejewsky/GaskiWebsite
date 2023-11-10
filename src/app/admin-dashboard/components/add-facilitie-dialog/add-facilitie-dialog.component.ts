import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-add-facilitie-dialog',
    templateUrl: './add-facilitie-dialog.component.html',
    styleUrls: ['./add-facilitie-dialog.component.scss']
})
export class AddFacilitieDialogComponent {
    facilityForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<AddFacilitieDialogComponent>,
        private fb: FormBuilder
    ) {
        this.facilityForm = this.fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            src: ['', [Validators.required]]
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (this.facilityForm.valid) {
            // Implement your save logic here
            this.dialogRef.close(this.facilityForm.value);
        }
    }

    // Helper method to get form controls for easier access in the template

}
