import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Content, contents, VisitedElements} from "../../contents/pl/facilities-content";

@Injectable({
  providedIn: 'root'
})
export class VisitedService {
    readonly contents = contents
    private firstEmit = Object.keys(this.contents).reduce((acc, key) => {
        return {
            ...acc, [key]: {isVisible: false}
        }
    }, {})

    public subject: BehaviorSubject<any> = new BehaviorSubject(this.firstEmit);

    getFacilities() {
        return this.subject.asObservable();
    }
    setStateVisibility(element: any) { //TODO set proper type
        console.log('set state!');
        let value = this.subject.value;
        let key = element.target.id;

        value[key as Content].isVisible = true;
        //console.log(value[key as Content].isVisible)
        //console.log(`element: ${element} typ: ${typeof(element)} keysy: ${Object.keys(element)} jakies random typu: ${element.target}`)
        this.subject.next(value);
        console.log(key + ' jest ' + value[key as Content].isVisible)
    }
    bum(element: any) {
        console.log('bum!!!')
        let value = this.subject.value;
        let key = element.target.id;

         //this.subject.next(value); // to wyglada na problem z emitem, przez to kazda fynkcja sie zawiesza
        //console.log('nowe wartosci po true: ' + this.subject.value);
       // this.subject.next('tescik');
        //let newValue = {...value, [key]: {isVisible: true} };
        //this.subject.next({...value, [key as Content]: {isVisible: true} })
        //console.log('przeszlo dalej' + {...value, [key as Content]: {isVisible: true} });
        //this.subject.next({...value});
        let newValue = {...value, [key]: {isVisible: true}};
        //console.log(newValue)
        //console.log(this.subject.value);
        console.log('tutaj powinno byc 4');
        this.subject.next(newValue);

    }
  constructor() { }

}
