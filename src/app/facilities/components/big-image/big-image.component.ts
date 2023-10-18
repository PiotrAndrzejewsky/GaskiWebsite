import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnhancedContents} from "../../../contents/pl/facilities-content";
import {Facilitie} from "../../../core/facilitie.model";

@Component({
    selector: 'app-big-image',
    templateUrl: './big-image.component.html',
    styleUrls: ['./big-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigImageComponent implements OnInit {
    @Output() changeSelectedEvent = new EventEmitter<string>();
    @Input() facilities?: Facilitie[];
    @Input() selected?: string;

    changeSelection(title: string) {
        this.changeSelectedEvent.emit(title);
    }

    ngOnInit() {
    }

}
