import {EdgeDays} from "./edgeDays.model";

export type Reservation = {
    days: EdgeDays,
    roomName: string,
    perDayCost: number,
    serviceCost: number,

}
