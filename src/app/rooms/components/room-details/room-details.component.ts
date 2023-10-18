import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomDetails, rooms} from "../../../contents/pl/rooms-contents";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
    public roomName: string = '';
    public roomDetails?: RoomDetails ;
    public selected?: Date;

    public selectedDays: Date[] = [];

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.roomName = params['name'];
            //TODO tutaj musi back furtka do pobrania pokoju na podstawie nazwy.
            // chyba nie ma innej drogi, trzeba bedize zrobic serwis i jesli beddzie ten pokoj to wyswietlic.

            if(!rooms.has(this.roomName))
            {
                this.router.navigate(['']);
                return;
            }

            this.roomDetails = rooms.get(this.roomName);
            // czyli tutaj chce wyciagnac value od keya, czyli wysatrczy zrobic rooms.get
        });
    }
}
