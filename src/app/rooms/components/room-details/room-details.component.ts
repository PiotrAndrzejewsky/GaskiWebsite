import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomsService} from "../../../core/services/rooms.service";
import {Room} from "../../../core/models/room.model";
import {ReservationService} from "../../../core/services/reservation.service";
import {EdgeDays} from "../../../core/models/edgeDays.model";

@Component({
    selector: 'app-room-details',
    templateUrl: './room-details.component.html',
    styleUrls: ['./room-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomDetailsComponent implements OnInit {
    public roomName: string = '';
    public roomDetails?: Room;

    public errors = {minimumError: false, maximumError: false, connectionError: false}
    public selected?: Date; // It Can be deleted

    public selectedDays: Date[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private RoomService: RoomsService,
                private cdr: ChangeDetectorRef,
                private reservationService: ReservationService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.roomName = params['name'];
            this.fetchRoomDatails();
        });


    }

    fetchRoomDatails() {
        this.RoomService.getRoomByName(this.roomName).subscribe({
            next: res => {
                this.roomDetails = res;
                this.cdr.detectChanges();
            },
            error: err => {
                console.error(err);
                this.redirectToMainPage()
            }
        });
    }

    redirectToMainPage() {
        this.router.navigateByUrl('').then();
    }

    goToSummary() {

        let hasErrors: boolean = !this.validateDays();
        console.log(hasErrors);

        if (hasErrors) {
            this.cdr.detectChanges();
            return;
        }

        let edgeDays: EdgeDays = this.getEdgeDays();
        //TODO getEdgeDays and validateDays sort's an array of selectedDays. For more optimal use write function that sorts array and delete sorting code from those fucntions

        this.reservationService.setReservation({
            days: edgeDays,
            roomName: this.roomName,
            perDayCost: this.roomDetails!.basePricePerNight,
            serviceCost: this.roomDetails!.pricePerPerson
        });

        this.router.navigate(['summary']).then();
    }


    validateDays(): boolean {
        let isCorrect: boolean = true;

        if (!this.validateMinDays()) {
            this.errors.minimumError = true;
            isCorrect = false;
        } else
            this.errors.minimumError= false;

        if (!this.validateMaxDays()) {
            this.errors.maximumError= true;
            isCorrect = false;
        } else
            this.errors.maximumError = false;

        if (!this.validateDaysConnection()) {
            this.errors.connectionError = true;
            isCorrect = false;
        } else
            this.errors.connectionError = false;


        return isCorrect;
    }

    validateMinDays(min: number = 0): boolean {
        return this.selectedDays.length !== min;
    }

    validateMaxDays(max: number = 15): boolean {
        return this.selectedDays.length <= max;
    }

    validateDaysConnection(): boolean {
        let dates: Date[] = this.selectedDays;
        if (dates.length <= 1) {
            return true;
        }

        dates = dates.slice().sort((a, b) => a.getTime() - b.getTime());

        for (let i = 0; i < dates.length - 1; i++) {
            const current = dates[i];
            const next = dates[i + 1];

            const differenceInDays = Math.abs((next.getDate() - current.getDate()));

            if (differenceInDays !== 1) {
                return false;
            }
        }

        return true;
    }

    getEdgeDays(): EdgeDays {
        let dates: Date[] = this.selectedDays;
        const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());

        return {
            firstDay: sortedDates[0],
            lastDay: sortedDates[sortedDates.length - 1]
        };
    }
}
