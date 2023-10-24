import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomsService} from "../../../core/rooms.service";
import {Room} from "../../../core/room.model";
import {ReservationService} from "../../../core/reservation.service";

@Component({
    selector: 'app-room-details',
    templateUrl: './room-details.component.html',
    styleUrls: ['./room-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomDetailsComponent implements OnInit {
    public roomName: string = '';
    public roomDetails?: Room;
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
        this.router.navigateByUrl('');
    }

    goToSummary() {

        this.reservationService.setReservedDays({
            days: this.selectedDays,
            roomName: this.roomName
        });

        this.router.navigate(['summary']);
        // musi nawigowac do summary

    }

}
