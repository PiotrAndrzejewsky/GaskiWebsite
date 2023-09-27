import {style, animate, trigger, transition, state} from '@angular/animations';

export const slideFromLeft =
    trigger('slideFromLeft', [
        transition('* => *', [
            style({ opacity: 0, transform: 'translateX(-30%)' }),
            animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0px)' }))
        ])
    ]);
export const fadeInStill =
    trigger('fadeInStill', [
        transition('* => *', [
            style({ opacity: 0.9, filter: 'blur(3px)' }),
            animate('0.25s ease', style({ opacity: 1, filter: 'blur(0px)' }))
        ])
    ]);
export const isSelected =
    trigger('isSelected', [
        state('false', style({filter: 'brightness(100%)'})),
        state('true', style({filter: 'brightness(130%)'})),
        transition('false <=> true', [
            animate('500ms ease')
        ])
    ]);
