import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Content, contents} from "../../contents/pl/facilities-content";

@Injectable({
  providedIn: 'root'
})
export class ContentSelectedService {
    //TODO make type here form object.keys, and use it with subject and seter
    readonly contents = contents
    private subject: BehaviorSubject<Content> = new BehaviorSubject(Object.keys(contents)[0] as Content);
    constructor() { }
    getState() {
        return this.subject.asObservable()
    }
    setState(state: any) {
        this.subject.next(state)
    }
}
