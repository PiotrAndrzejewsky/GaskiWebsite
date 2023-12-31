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
export const appearFromBottom = trigger('appearFromBottom', [
    state('false', style({ transform: 'translateY(40px)', opacity: 0 })),
    state('void', style({ transform: 'translateY(40px)', opacity: 0 })),
    state('true', style({ transform: 'translateY(0)', opacity: 1 })),
    transition('* => true', animate('500ms ease')),
]);

export const calendarStateColor = trigger("calendarStateColor", [
    state('selected', style({backgroundColor: '#539ded'})),
    state('selectedHover', style({backgroundColor: '#7292b5'})),
    state('reserved', style({backgroundColor: '#e61212'})),
    state('reservedOutOfMonth', style({backgroundColor: '#fa7070', color: '#79807e'})),
    state('free', style({backgroundColor: '#e3fae8'})),
    state('freeHover', style({backgroundColor: '#cadece'})),
    state('freeOutOfMonth', style({backgroundColor: '#f2f7f3', color: '#79807e'})),
    state('freeOutOfMonthHover', style({backgroundColor: '#dfe6e0', color: '#79807e'}))
])

export const rotate =  trigger('rotate', [
    state('false', style({ transform: 'rotate(0deg)' })),
    state('true', style({ transform: 'rotate(90deg)' })),
    transition('false => true', animate('275ms ease-out')),
    transition('true => false', animate('180ms ease-in'))
]);
