import {Component, OnInit} from '@angular/core';
import {Room, rooms} from "../contents/pl/rooms-contents";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
    public rooms: Room = rooms;
    ngOnInit() {

    }
}
