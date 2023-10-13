import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }
    getReservedDaysForDateRange(firstDay: Date) {
      let array =[
          new Date("2023-10-13T12:59:59.000Z"),
          new Date("2023-10-14T12:59:59.000Z"),
          new Date("2023-10-15T12:59:59.000Z")
      ];
      return of(array);
    }
    // to musi być data
}
