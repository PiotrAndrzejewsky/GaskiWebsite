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
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.roomName = params['name'];

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
// czyli tuttaj jets ze jesli rooms ma property takie to git jak nie to naviagte


// jam muse zrobic