import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Observable} from "rxjs";
import {ImagesContent} from "../contents/pl/facilities-content";

@Component({
  selector: 'app-big-image',
  templateUrl: './big-image.component.html',
  styleUrls: ['./big-image.component.scss']
})
export class BigImageComponent {
    @Output() changeContentEvent = new EventEmitter<string>();
    @Input() images$: any; //TODO make type here


}
