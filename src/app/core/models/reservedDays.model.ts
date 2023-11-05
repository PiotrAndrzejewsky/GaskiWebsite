import {EdgeDays} from "./edgeDays.model";

export type Reservation = {
    days: EdgeDays,
    roomName: string,
    perDayCost: number,
    serviceCost: number,
}

export type ReservationWithContactData = Reservation & {
    fullName: string,
    telephone: string,
    email: string
}
