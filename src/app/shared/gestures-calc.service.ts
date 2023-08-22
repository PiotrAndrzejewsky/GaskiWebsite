import { Injectable } from '@angular/core';
import {GestureCordinates} from "./gestures.model";
import {FacilityType} from "../facilities/utilities/FacilityContent.model";

@Injectable({
  providedIn: 'root'
})
export class GesturesCalcService {

  constructor() { }
    onTouchStart(event: TouchEvent, gestureCordinates: GestureCordinates) {
      console.log('w funkcji');
        gestureCordinates.initialX = event.touches[0].clientX;
        console.log('X' + gestureCordinates.initialX);
    }

    onTouchMove(event: TouchEvent, gestureCordinates: GestureCordinates) {


        gestureCordinates.diffX = event.touches[0].clientX - gestureCordinates.initialX;
        console.log('diff:' + gestureCordinates.diffX);
    }

    onTouchEnd(gestureCordinates: GestureCordinates, getAnotherContent: (action: string) => string, setSelection: (idName: string) => void ) {


        // tutaj logika z   e jak jest mniejsze niz 20px to dajemy na 0 a jak nie to daje zmiene facilitty  + do elementu dajemy klase z animacja odlatywania. trzeba tez tutaj przekaz element reference niestety
        if(gestureCordinates.diffX < 50 && gestureCordinates.diffX > -50) {
            gestureCordinates.diffX = 0;
            return;
        }

        else {
            if(gestureCordinates.diffX > 0) {
                //document.querySelector('app-big-image')?.classList.add('fade-out-rigth');
                setTimeout( () => {setSelection(getAnotherContent( 'next')); gestureCordinates.diffX = 0;}, 0);
            }
            else {
               // document.querySelector('app-big-image')?.classList.add('fade-out-left');
                setTimeout( () => {setSelection(getAnotherContent( 'previous')); gestureCordinates.diffX = 0;}, 0);
            }

        }

    }
}
