import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {isSelected} from "../../../shared/animations";
import {Facilitie} from "../../../core/models/facilitie.model";

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss'],
    animations: [isSelected],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ImageSlotsComponent {
    @Output() mouseEnterEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() facilities?: Facilitie[];
    @Input() selected?: string;

    emitNewSelection(title: string, elementReference: HTMLImageElement): void {

        setTimeout(() => {
            if (!elementReference?.matches(":hover"))
                return;
            this.mouseEnterEvent.emit(title);
        }, 50);
    }

}
