import {Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss']
})
export class ImageSlotsComponent implements OnInit {
    private previouslySelected?: HTMLDivElement | null;
    @Output() mouseEnter: EventEmitter<string> = new EventEmitter<string>();
    ngOnInit(): void {
        this.previouslySelected = document.querySelector('#first');
    }

    selectClass(elementReference: HTMLDivElement, elementName: string): void {

        if(elementReference === this.previouslySelected)
            return;

        this.mouseEnter.emit(elementName);
        elementReference.classList.add('col-2');
        elementReference.classList.remove('col-1');

        if(this.previouslySelected) {
            this.previouslySelected.classList.remove('col-2');
            this.previouslySelected.classList.add('col-1');
        }
        this.previouslySelected = elementReference;
    }

}
