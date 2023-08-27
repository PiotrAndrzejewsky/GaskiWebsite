import {Component, inject, Input, OnInit} from '@angular/core';
import { Output, EventEmitter} from '@angular/core';
import {Content, ModifiedContent} from "../contents/pl/facilities-content";
import {ContentSelectedService} from "../core/services/content-selected.service";
import {isSelected} from "../shared/animations";

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss'],
    animations: [isSelected]

})
export class ImageSlotsComponent{
    @Output() mouseEnterEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() images?: any; //TODO make type here
    private stateService = inject(ContentSelectedService);

    emitNewSelection(newSelection: any, elementReference: any): void {

        setTimeout(() => {
            if(!elementReference?.matches(":hover"))
                return;
            // tutaj emit juz w serwisie
            this.stateService.setState(newSelection as Content);
        }, 80);
    }

}
