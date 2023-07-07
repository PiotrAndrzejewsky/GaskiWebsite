import {Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {selectAnimation} from "../shared/animations";

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss'],
    animations: [selectAnimation]
})
export class ImageSlotsComponent {
    public elementNameToSelect: string = 'first';
    @Output() mouseEnter: EventEmitter<string> = new EventEmitter<string>();

    selectClass(elementReference: HTMLDivElement, elementName: string): void {

        setTimeout(() => {
            if(!elementReference.matches(":hover"))
                return;

            this.mouseEnter.emit(elementName);
            this.elementNameToSelect = elementName;
        }, 80);
    }

}
