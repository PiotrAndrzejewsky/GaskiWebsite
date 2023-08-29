import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import { Output, EventEmitter} from '@angular/core';
import {ContentKey, ImagesContent} from "../contents/pl/facilities-content";
import {ContentSelectedService} from "../core/services/content-selected.service";
import {isSelected} from "../shared/animations";

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss'],
    animations: [isSelected],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ImageSlotsComponent{
    @Output() mouseEnterEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() images?: any; //TODO make proper type here
    private stateService = inject(ContentSelectedService);

    emitNewSelection(newSelection: any, elementReference: HTMLImageElement): void {

        setTimeout(() => {
            if(!elementReference?.matches(":hover"))
                return;
            this.stateService.setState(newSelection as ContentKey);
        }, 80);
    }

}
