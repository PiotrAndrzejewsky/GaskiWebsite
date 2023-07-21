import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent {
    @Output() changeContentEvent = new EventEmitter<string>();
    previous() {
        this.changeContentEvent.emit('previous');
    }
    next() {
        this.changeContentEvent.emit('next');
    }
}
