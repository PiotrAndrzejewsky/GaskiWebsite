import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss']
})
export class ImageSlotsComponent implements OnInit {
    private previouslySelected?: HTMLDivElement | null;
    ngOnInit() {
        this.previouslySelected = document.querySelector('section div');
    }

    selectClass(elementReference: HTMLDivElement){
        elementReference.classList.add('col-2');
        elementReference.classList.remove('col-1');
        if(this.previouslySelected) {
            this.previouslySelected.classList.remove('col-2'); this.previouslySelected.classList.add('col-1');
        }
        this.previouslySelected = elementReference;
    }

}
