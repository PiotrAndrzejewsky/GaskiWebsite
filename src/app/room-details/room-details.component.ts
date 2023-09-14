import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const roomName = params['name'];
            console.log(roomName); // Do something with the parameter
        });
    }
}
