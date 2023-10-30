import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Room} from "../../../core/room.model";
import {ScrollService} from "../../../core/scroll.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent {
    @Input() room?: Room;
    public indexToDisplay: number = 0;

    constructor(private router: Router, private scrollService: ScrollService) {
    }

    moveToRoomSite() {
        this.router.navigate(['rooms', this.room?.title]);
        this.scrollService.resetScrollPosition();

    }

    nextImage() {
        if(!this.room?.imageLink)
            return
        if(this.indexToDisplay === this.room.imageLink.length -1) {
            this.indexToDisplay = 0;
        }
        else {
            this.indexToDisplay++;
            console.log(this.indexToDisplay)
        }
    }

    previousImage() {
        if(!this.room?.imageLink)
            return
        if(this.indexToDisplay === 0) {
            this.indexToDisplay = this.room.imageLink.length -1;
        }
        else {
            this.indexToDisplay--;
        }
    }

}
