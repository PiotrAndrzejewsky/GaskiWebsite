import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Room, rooms} from "../contents/pl/rooms-contents";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent {
    public rooms: Room = rooms;

}
