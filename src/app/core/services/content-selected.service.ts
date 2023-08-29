import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ContentKey, contents} from "../../contents/pl/facilities-content";

@Injectable({
  providedIn: 'root'
})
export class ContentSelectedService {
    //TODO make type here form object.keys, and use it with subject and seter
    readonly contents = contents
    private subject: BehaviorSubject<ContentKey> = new BehaviorSubject(Object.keys(contents)[0] as ContentKey);
    constructor() { }
    getState() {
        return this.subject.asObservable()
    }
    setState(state: any) {
        this.subject.next(state)
    }
}
