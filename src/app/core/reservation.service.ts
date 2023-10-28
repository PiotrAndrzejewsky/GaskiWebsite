import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {Reservation} from "./reservedDays.model";

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    private reservedDays?: Reservation;

    constructor() {
    }

    getReservedDaysForDateRange(firstDay: Date) {
        let array = [
            new Date("2023-10-13T12:59:59.000Z"),
            new Date("2023-10-14T12:59:59.000Z"),
            new Date("2023-10-15T12:59:59.000Z"),
            new Date("2023-09-30T12:59:59.000Z"),
            new Date("2023-09-29T12:59:59.000Z"),
        ];
        return of(array);
    }

    setReservedDays(arg: Reservation) {
        this.reservedDays = arg;
    }

    getReservedDays(): Reservation {
        if(this.reservedDays)
            return this.reservedDays
        else
            return {days: [], roomName: '', perDayCost: 0, serviceCost: 0}
    }

    getOverallCost() {
        if(this.reservedDays)
            return this.reservedDays?.serviceCost + this.reservedDays?.perDayCost * this.reservedDays?.days.length;
        else return 0;
    }

    pushReservation() {
        // push reservation to the server.
    }
}
