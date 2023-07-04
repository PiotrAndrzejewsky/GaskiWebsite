import {Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image-slots',
    templateUrl: './image-slots.component.html',
    styleUrls: ['./image-slots.component.scss']
})
export class ImageSlotsComponent implements OnInit {
    private previouslySelected?: HTMLDivElement | null;
    private animationPlayedAtTheSameTimeCounter: number = 0;
    @Output() mouseEnter: EventEmitter<string> = new EventEmitter<string>();
    ngOnInit() {
        this.previouslySelected = document.querySelector('#first');
    }
    blockMoreThenTwoAnimations(): boolean {

        return this.animationPlayedAtTheSameTimeCounter > 1;
    }
    decrementAnimationPlayedAtTheSameTimeCounter(){
        console.log('wywolano decrement: stan orzed decrement:' + this.animationPlayedAtTheSameTimeCounter);
        this.animationPlayedAtTheSameTimeCounter--;
        console.log(' stan po decrement:' + this.animationPlayedAtTheSameTimeCounter);

    }
    incrementAnimationPlayedAtTheSameTimeCounter() {
        console.log('wywolano inkrementacje, stan przed:' + this.animationPlayedAtTheSameTimeCounter);
        this.animationPlayedAtTheSameTimeCounter++;
        console.log('stan po:' + this.animationPlayedAtTheSameTimeCounter)

    }

    selectClass(elementReference: HTMLDivElement, elementName: string){
        // if(this.blockMoreThenTwoAnimations()){
        //     setTimeout(() => this.selectClass(elementReference, elementName), 2);
        //     console.log('settimeout na block: counter =' + this.animationPlayedAtTheSameTimeCounter);
        //     // tutaj robi sie nieskonczona rekurencja settiemoutow. przynajmniej wiem ze one dzialaja i guard sie wykouje. problem jest z decrementem
        //     return;
        // }
        if(elementReference === this.previouslySelected)
            return;

        this.mouseEnter.emit(elementName);
        elementReference.classList.add('col-2');
        elementReference.classList.remove('col-1');
        // this.incrementAnimationPlayedAtTheSameTimeCounter();// i tutaj jak byla 1 animacja to pozwoli na druga. jesli byly by 2 to nie pozwoli na 3
        // setTimeout(() => this.decrementAnimationPlayedAtTheSameTimeCounter(),500);
        // tutaj jestprobe=lem. to trzeba robic w funkcji strzalokowej.
        if(this.previouslySelected) {
            console.log('previouseSelcted');
            this.previouslySelected.classList.remove('col-2');
            this.previouslySelected.classList.add('col-1');
        }
        this.previouslySelected = elementReference;

        //TODO to fix this bug with triple animation, I need to set timer on claslist remove and and new variable like
        //TODO multipleAnimationDetectionFlag i przy wywolaniu klasy najpierw sprawedzam czy czasem nie jest ustaiowna na true.
        //TODO jesli tak to opzniam proces z klasami. a przy normalnym wywolaniu ustawiam ja na true
        // i ustawiam timer na ustawnienie false
    }

}
