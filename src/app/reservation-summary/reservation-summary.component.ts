import { Component } from '@angular/core';
import {ReservationService} from "../core/services/reservation.service";
import {Reservation} from "../core/models/reservedDays.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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


    public reservation?: Reservation ;

    public finalCost: number = 0 ;

    constructor(private reservationService: ReservationService, private fb: FormBuilder, private router: Router) {
        this.reservation = reservationService.getReservation();
        this.setFinalCost();
    }

    ngOnInit() {

    }

    setFinalCost() {
        this.finalCost = this.reservationService.getOverallCost();
    }



    onSubmit() {
        if (this.contactForm?.invalid) {
            return;
        }
        // tutaj router wbija na nowa strone.
        // tutaj wysylac requesta na strone.
        this.reservationService.pushReservation();
        this.reservationService.setReservationProccesFinished()
        this.router.navigate(['thanks']);

    }



}
