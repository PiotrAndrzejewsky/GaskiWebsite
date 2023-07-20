import {Component} from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss']
})
export class ImageSlotsComponent {
    @Output() mouseEnterEvent: EventEmitter<string> = new EventEmitter<string>();

    selectClass(elementIdName: string): void {

        setTimeout(() => {
            if(!document.querySelector('#'+elementIdName)?.matches(":hover"))
                return;
            else
                this.mouseEnterEvent.emit(elementIdName);
        }, 80);
    }
}
