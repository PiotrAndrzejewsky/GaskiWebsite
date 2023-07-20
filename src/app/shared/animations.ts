import {style, animate, trigger, transition} from '@angular/animations';

export const fadeInOut =
    trigger('fadeInOut', [
        transition('* => *', [
            style({ opacity: 0, transform: 'translateY(50px)', filter: 'blur(5px)' }),
            animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }))
        ])
    ]);
