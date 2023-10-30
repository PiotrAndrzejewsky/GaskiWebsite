import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../core/reservation.service";
import {Reservation} from "../core/reservedDays.model";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

    public reservation?: Reservation;
    public overalCost?: number;
    constructor(private reservationService: ReservationService) {}
    // nie no na ten moment getuje poprostu z seriwsu i tyle to co zarezerwowoalemi tyle. poznie jsie zastanowie czy to w cookies zrobic czy tak jak jest zostawic

    ngOnInit() {
        this.reservation = this.reservationService.getReservedDays();
        this.overalCost = this.reservationService.getOverallCost();
    }


}
