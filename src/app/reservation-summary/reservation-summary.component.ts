import { Component } from '@angular/core';
import {ReservationService} from "../core/reservation.service";
import {Reservation} from "../core/reservedDays.model";

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent {

    public reservation: Reservation ;

    public finalCost: number = 0 ;

    constructor(private reservedDays: ReservationService) {
        this.reservation = reservedDays.getReservedDays();
        this.setFinalCost();
    }

    setFinalCost() {
        this.finalCost = this.reservation.serviceCost + this.reservation.perDayCost * this.reservation.days.length;
    }




}
