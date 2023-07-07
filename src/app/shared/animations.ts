import {animation, style, animate, trigger, transition, useAnimation, state} from '@angular/animations';

export const fadeSlideInOutAnimation =
    trigger('fadeSlideInOut', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
    ]);
export const selectAnimation =
    trigger('select', [
        state('default', style({ width: '15%' })),
        state('selected', style({ width: '28%' })),
        transition('default <=> selected', animate('500ms ease')),

        //TODO try ease-in and ease-out
    ])
