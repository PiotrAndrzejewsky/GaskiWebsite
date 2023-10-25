import { Component } from '@angular/core';
import {ReservationService} from "../core/reservation.service";
import {Reservation} from "../core/reservedDays.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent {
    public contactForm: FormGroup = this.fb.group({
        firstName: ['', Validators.required],
        telephone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
    });


    public reservation: Reservation ;

    public finalCost: number = 0 ;

    constructor(private reservedDays: ReservationService, private fb: FormBuilder) {
        this.reservation = reservedDays.getReservedDays();
        this.setFinalCost();
    }

    ngOnInit() {

    }

    setFinalCost() {
        this.finalCost = this.reservation.serviceCost + this.reservation.perDayCost * this.reservation.days.length;
    }



    onSubmit() {
        if (this.contactForm?.valid) {
            console.log('Form Data:', this.contactForm.value);
            // Add further processing logic here (e.g., sending data to server)
        }
    }



}
