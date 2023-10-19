import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {appearFromBottom} from "../shared/animations";
import {RoomsService} from "../core/rooms.service";
import {Room} from "../core/room.model";


@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss'],
    animations: [appearFromBottom],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {
    public visibilityHolder:  {[key: string] : {isVisible: boolean }} = {};

    public rooms: Room[] = [];

    private observer = new IntersectionObserver((entrie) => {
        entrie.forEach((entry) => {
            if(entry.isIntersecting) {
                this.setVisibilityHolder(entry.target.id);
            }
        })

    }, { threshold: 0.2, root: document.querySelector('app-component'), rootMargin: '0px' });

    constructor(private cdr: ChangeDetectorRef, private roomsService: RoomsService) {
    }

    ngOnInit() {
        this.getRooms();
    }

    getRooms() {
        this.roomsService.getAvailableRooms().subscribe((rooms) =>
        {
            this.rooms = rooms;
            this.initializeObserver();
        })
    }

    initializeObserver() {
        document.querySelectorAll('app-room').forEach((element) => {
            this.observer.observe(element);
            this.pushToVisibilityHolder(element.id);
        });
        this.cdr.detectChanges();
    }

    pushToVisibilityHolder(id: string) {
        this.visibilityHolder[id] = { isVisible: false };
    }

    setVisibilityHolder(elementId: string) {
        this.visibilityHolder[elementId].isVisible = true;
        this.cdr.detectChanges()
    }

}
