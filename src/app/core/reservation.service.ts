import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {ReservedDays} from "./reservedDays.model";

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    private reservedDays?: ReservedDays;

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

    setReservedDays(arg: ReservedDays) {
        this.reservedDays = arg;
    }

    getReservedDays() {
        return this.reservedDays;
    }
}
