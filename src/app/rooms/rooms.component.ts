import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Room, rooms} from "../contents/pl/rooms-contents";
import {appearFromBottom} from "../shared/animations";
import {ContentKey} from "../contents/pl/facilities-content";

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss'],
    animations: [appearFromBottom],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent {
    public rooms: Room = rooms;
    public visibilityHolder:  {[key: string] : {isVisible: boolean }} = {};

    private observer = new IntersectionObserver((entrie) => {
        entrie.forEach((entry) => {
            if(entry.isIntersecting) {
                this.setVisibility(entry.target.id);
            }
        })

    }, { threshold: 0.2, root: document.querySelector('app-component'), rootMargin: '0px' });

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        document.querySelectorAll('app-room').forEach((element) => {
            this.observer.observe(element);
            this.visibilityHolder[element.id] = { isVisible: false };
        });
        this.cdr.detectChanges();
    }

    setVisibility(elementId: string) {
        this.visibilityHolder[elementId].isVisible = true;
        this.cdr.detectChanges()
    }
}
