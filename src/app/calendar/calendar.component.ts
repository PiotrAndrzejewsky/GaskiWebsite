import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReservationService} from "../core/reservation.service";
import {calendarDate} from "../core/calendarDate.model";

const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    public calendarDates?: calendarDate[];
    public days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'];
    date = new Date();
    @Output() selected = new EventEmitter();
    private reservedDays?: Date[];

    constructor(private reservationService: ReservationService) {

    }

    ngOnInit() {
        this.reservationService.getReservedDaysForDateRange(this.date).subscribe((reservedDays) => {
            this.reservedDays = reservedDays;
            this.calendarDates = this.getCalendarDays(this.date);
            console.log('daty' + this.calendarDates[18].date + this.calendarDates[18].state)

        })
    }

    setMonth(inc: any) {
        const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
        this.date = new Date(year, month + inc, 1);
        //this.dates = this.getCalendarDays(this.date);
        // tutuaj to wlg trzeba odpalic na nowo request z nowa datą, i jeszcze raz robic asercje czy azarezerowany cz nie i selekted

    }

    isSameMonth(date: any) {
        return date.getMonth() === this.date.getMonth();
    }

    getReservationState(date: Date) {
        return this.reservedDays?.some(reservedDay =>
            reservedDay.getMonth() === date.getMonth() && reservedDay.getDay() === date.getDay()
        ) ? 'reserved' : 'free';
        // to byl pierwzy if w sumie jedyny ktory sprawdza czy jest zajety.
        //TODO tutaj jeszce musi byc drug if ktory sprawdzi czy ta data nie jest juz w selected array
    }

    private getCalendarDays(date = new Date) {
        const calendarStartTime =
            this.getCalendarStartDay(date)!.getTime() + 60 * 60 * 2 * 1000; /* add 2 hours for day light saving time adjustment */
        // zalepiłem tutaj !

        return this.range(1, 42)
            .map(num => {
                return {
                    date: new Date(calendarStartTime + DAY_MS * num),
                    state: this.getReservationState(new Date(calendarStartTime + DAY_MS * num))
                }
            });
        //TODO i tutaj wlasnie mapować do obiektu wraz ze statem
    }

    private getCalendarStartDay(date = new Date) {
        const [year, month] = [date.getFullYear(), date.getMonth()];
        const firstDayOfMonth = new Date(year, month, 1).getTime();

        return this.range(1, 7)
            .map(num => new Date(firstDayOfMonth - DAY_MS * num))
            .find(dt => dt.getDay() === 0)
    }

    private range(start: any, end: any, length = end - start + 1) {
        return Array.from({length}, (_, i) => start + i)
    }
}
