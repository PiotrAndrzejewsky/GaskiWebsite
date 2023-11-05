import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Reservation, ReservationWithContactData} from "../models/reservedDays.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class ReservationService {


    constructor(private cookies: CookieService) {
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

    setReservation(reservation: Reservation) {
        const reservationJson = JSON.stringify(reservation);
        this.cookies.set('reservation', reservationJson)
    }

    getReservation(): Reservation {
        let reservation = JSON.parse(this.cookies.get('reservation'));

        reservation.days.firstDay = new Date(reservation.days.firstDay);
        reservation.days.lastDay = new Date(reservation.days.lastDay);

        return reservation;
    }

    getAvailableRooms(): Observable<string[]> {
        //request for rooms
        return of(['Pokój słoneczny', 'Domek']);
    }

    setReservationProccesUnfinished() {
        this.cookies.set('reservationFinished', 'false');
    }

    setReservationProccesFinished() {
        this.cookies.set('reservationFinished', 'true');
    }

    getOverallCost() {
            let reservation = this.getReservation();
            return reservation.serviceCost + reservation.perDayCost * (this.getDaysDifference(reservation.days.firstDay, reservation.days.lastDay) + 1) ;
    }

    pushReservationToServer(reservation: ReservationWithContactData) {
        // push reservation to the server.
    }

    getDaysDifference(startDate: Date, endDate: Date): number {
        console.log(typeof(startDate))
        console.log(endDate)
        const differenceInDays = Math.floor(endDate.getDate() - startDate.getDate() );
        //const differenceInDays = 4;
        return Math.abs(differenceInDays);
    }
}
