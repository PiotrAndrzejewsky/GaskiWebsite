import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReservationService} from "../core/reservation.service";
import {calendarDate} from "../core/calendarDate.model";
import {calendarStateColor} from "../shared/animations";

const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    animations: [calendarStateColor]
})
export class CalendarComponent implements OnInit {
    public calendarDates?: calendarDate[];
    public days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Ndz'];
    date = new Date();

    @Output() selected = new EventEmitter<Date[]>();
    private reservedDays?: Date[];
    private selectedDays: Date[] = [];

    constructor(private reservationService: ReservationService) {

    }

    ngOnInit() {
        this.getReservedDays();
        this.setCalendarDates();
    }

    emitSelectedDays() {
        this.selected.emit(this.selectedDays);
    }

    getReservedDays() {
        this.reservationService.getReservedDaysForDateRange(this.date).subscribe((reservedDays) => {
            this.reservedDays = reservedDays;
        })
    }

    setCalendarDates() {
        this.calendarDates = this.getCalendarDays(this.date);
    }

    setMonth(inc: number) {
        const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
        this.date = new Date(year, month + inc, 1);

    }

    isSameMonth(date: any) {
        return date.getMonth() === this.date.getMonth();
    }

    getReservationState(date: Date) {

        if (this.selectedDays?.some(selectedDay =>
            selectedDay.getMonth() === date.getMonth() && selectedDay.getDate() === date.getDate()))
            return 'selected';

        if (this.reservedDays?.some(reservedDay =>
            reservedDay.getMonth() === date.getMonth() && reservedDay.getDate() === date.getDate())) {

            if (this.isSameMonth(date))
                return 'reserved';
            return 'reservedOutOfMonth';
        }

        else {

            if (this.isSameMonth(date)) {
                return 'free';
            }

            else {
                return 'freeOutOfMonth';
            }
        }

    }

    switchSelectDay(index: number, state: string) {
        let clickedDate: Date = this.calendarDates![index].date;

        if (state === 'free' || state === 'freeHover' || state === 'freeOutOfMonth' || state === 'freeOutOfMonthHover') {
            this.selectedDays.push(clickedDate);
            this.emitSelectedDays();
            if (index || index === 0)
                this.calendarDates![index].state = 'selected';

        }

        if (state === 'selected' || state === 'selectedHover') {
            if (index || index === 0) {
                this.calendarDates![index].state = this.isSameMonth(clickedDate) ? 'freeHover' : 'freeOutOfMonthHover';
                this.selectedDays = this.selectedDays.filter(date => !this.isSameDate(date, clickedDate));
            }
        }
    }


    private getCalendarDays(date = new Date) {
        const calendarStartTime =
            this.getCalendarStartDay(date)!.getTime() + 60 * 60 * 2 * 1000; /* add 2 hours for day light saving time adjustment */

        return this.range(1, 42)
            .map(num => {
                return {
                    date: new Date(calendarStartTime + DAY_MS * num),
                    state: this.getReservationState(new Date(calendarStartTime + DAY_MS * num))
                }
            });
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

    deleteHoverState(index: number) {
        let currentState = this.calendarDates![index].state;
        if(this.endsWithHover(currentState))
            this.calendarDates![index].state = this.cutLast5Characters(currentState);
    }
    addHoverState(index: number) {
        let currentState = this.calendarDates![index].state;
        if(currentState === 'free' || currentState === 'selected' || currentState === 'freeOutOfMonth')
        {
            this.calendarDates![index].state = this.getStateWithHover(currentState);
        }
    }
    endsWithHover(inputString: string): boolean {
        return inputString.endsWith('Hover');
    }

    cutLast5Characters(inputString: string): string {
        return inputString.slice(0, -5);
    }
    getStateWithHover(inputString: string): string {
        return inputString + 'Hover';
    }



    changeMonth(amount: number) {
        this.setMonth(amount);
        this.getReservedDays();
        this.setCalendarDates();
        //TODO trigger cd
    }

    isSameDate(date1: Date, date2: Date): boolean {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }
}

