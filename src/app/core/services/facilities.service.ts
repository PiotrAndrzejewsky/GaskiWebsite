import { Injectable } from '@angular/core';
import { delay, map, of } from "rxjs";
import { Facilitie } from "../models/facilitie.model";

@Injectable({
    providedIn: 'root'
})
export class FacilitiesService {

    constructor() { }

    getFacilities() {
        let array: Facilitie[] = [
            {
                title: 'Plaża',
                src: 'assets/images/atrakcje/plaża.jpg',
                description: 'Plaża w Gąskach to jedna z najpiękniejszych plaż na polskim wybrzeżu. Szeroki pas piasku i czysta woda zapewniają wspaniałe warunki do wypoczynku.'
            },
            {
                title: 'Latarnia morska',
                src: 'assets/images/atrakcje/latarnia.jpg',
                description: "Latarnia morska w Gąskach to jedna z największych atrakcji w regionie! Zapraszamy do wejścia na szczyt i podziwiania zapierających dech w piersiach widoków."
            },
            {
                title: 'Miejsce na ognisko',
                src: 'assets/images/atrakcje/ognisko.jpg',
                description: 'Na terenie posesji znajduje się specjalnie przygotowane miejsce na ognisko. Zapewniamy pomoc w organizacji wieczornego grillowania.'
            },
            {
                title: 'Plac zabaw',
                src: 'assets/images/atrakcje/plac-zabaw.jpg',
                description: 'Dla naszych najmłodszych gości przygotowaliśmy bezpieczny plac zabaw wyposażony w zjeżdżalnię, huśtawki i piaskownicę.'
            },
            {
                title: 'Taras',
                src: 'assets/images/atrakcje/taras.jpg',
                description: 'Przestronny, osłonięty taras to idealne miejsce na poranną kawę, wieczorny relaks lub spotkania towarzyskie przy grillu.'
            },
            {
                title: 'Jacuzzi',
                src: 'assets/images/atrakcje/jacuzzi.jpg',
                description: 'Dla Państwa komfortu udostępniamy nowoczesne jacuzzi - doskonałe miejsce do relaksu po całodniowych atrakcjach.'
            },
            {
                title: 'Nadmorski deptak',
                src: 'assets/images/atrakcje/gofry.jpg',
                description: 'Urokliwy deptak w Gąskach oferuje liczne atrakcje - klimatyczne restauracje, lodziarnie, sklepy z pamiątkami i stragany z lokalnymi przysmakami.'
            },
        ];
        return of(array).pipe()
    }

    addNewFacilitie(facilite: Facilitie) {
        // push facilite to server
        return of('true');
    }

    deleteFacilite(name: string) {
        return of('true');
    }
}
