import { Injectable } from '@angular/core';
import {delay, map, of} from "rxjs";
import {Facilitie} from "./facilitie.model";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor() { }

    getFacilities() {
        let array: Facilitie[] = [
            {
                title: 'plaża',
                src: 'https://picsum.photos/500?seed=50',
                description: 'Plaża w Gąskach to najelpsza plaża pod słońcem, mamy niedzeje że przypadnie Państwu do gustu'
            },
            {
                title: 'ogrody',
                src: 'https://picsum.photos/500?seed=51',
                description: 'Widziałeś 1000 gatunków roślin ? nie ? to zobacz gąskowe ogrody!'
            },
            {
                title: 'baseny',
                src: 'https://picsum.photos/500?seed=52',
                description: 'Wierzymy, że gąskowe baseny będą dla Państwa odetchnieniem od wszelkich obowiązków. Życzymy miłego pluskania'
            },
            {
                title: 'aquapark',
                src: 'https://picsum.photos/500?seed=54',
                description: 'Do basenów gąskowych przyjeżdzał Marek Aureliusz. Poczuj się jak to jest kąpać się tam gdzie imperator'
            },
            {
                title: 'transport',
                src: 'https://picsum.photos/500?seed=55',
                description: 'We wszystkie miejsca dojedzecie Państwo hulajnogami, udostępnionymi za darmo w naszej bazie'
            },

        ];
        return of(array).pipe(
            delay(1000)
        )
    }
}
