import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {EnhancedContents} from "../../../contents/pl/facilities-content";
import {isSelected} from "../../../shared/animations";

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss'],
    animations: [isSelected],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ImageSlotsComponent {
    @Output() mouseEnterEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() images?: EnhancedContents; //TODO make proper type here

    emitNewSelection(key: string, elementReference: HTMLImageElement): void {

        setTimeout(() => {
            if (!elementReference?.matches(":hover"))
                return;
            this.mouseEnterEvent.emit(key);
            console.log('emit@')
        }, 80);
    }

}
