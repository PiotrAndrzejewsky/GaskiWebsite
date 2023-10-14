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
    @Output() selected = new EventEmitter();
    private reservedDays?: Date[];
    private selectedDays?: Date[];

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
        //TODO make sure index from trmplate is givem properly ( template satrs from 0 index)
        //let index = this.calendarDates?.findIndex((element) => element.date === clickedDate);
        let clickedDate: Date = this.calendarDates![index].date;

        if (state === 'free' || state === 'freeHover' || state === 'freeOutOfMonth' || state === 'freeOutOfMonthHover') {
            this.selectedDays?.push(clickedDate);
            if (index || index === 0)
                this.calendarDates![index].state = 'selected'
        }

        if (state === 'selected' || state === 'selectedHover') {
            if (index || index === 0) {
                this.calendarDates![index].state = this.isSameMonth(clickedDate) ? 'freeHover' : 'freeOutOfMonthHover';
                this.selectedDays?.filter(selectedDay => selectedDay !== clickedDate);
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


}

