import {Component, Input} from '@angular/core';
import {Room, RoomDetails} from "../contents/pl/rooms-contents";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
    @Input() content?: RoomDetails
    @Input() title?: string;

}
