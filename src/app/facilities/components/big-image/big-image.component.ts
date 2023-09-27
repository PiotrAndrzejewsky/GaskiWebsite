import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnhancedContents} from "../../../contents/pl/facilities-content";

@Component({
    selector: 'app-big-image',
    templateUrl: './big-image.component.html',
    styleUrls: ['./big-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigImageComponent implements OnInit {
    @Output() changeContentEvent = new EventEmitter<string>();
    @Input() images?: EnhancedContents;

    changeSelection(key: string) {
        this.changeContentEvent.emit(key);
    }

    ngOnInit() {
        console.log(this.images?.aquapark.src)
    }

}
