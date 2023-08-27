import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent {
    @Output() changeContentEvent = new EventEmitter<string>();
    @Input() images$: any; //TODO make type here
    previous() {
        this.changeContentEvent.emit('previous');
    }
    next() {
        this.changeContentEvent.emit('next');
    }
}
