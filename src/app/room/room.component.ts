import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RoomDetails} from "../contents/pl/rooms-contents";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent implements OnInit{
    @Input() content?: RoomDetails;
    @Input() title?: string;
    public indexToDisplay: number = 0;

    moveToRoomSite() {
    }
    ngOnInit() {

    }

    nextImage() {
        if(!this.content?.imageLink)
            return
        if(this.indexToDisplay === this.content.imageLink.length -1) {
            this.indexToDisplay = 0;
        }
        else {
            this.indexToDisplay++;
            console.log(this.indexToDisplay)
        }
    }

    previousImage() {
        if(!this.content?.imageLink)
            return
        if(this.indexToDisplay === 0) {
            this.indexToDisplay = this.content.imageLink.length -1;
        }
        else {
            this.indexToDisplay--;
        }
    }

}
