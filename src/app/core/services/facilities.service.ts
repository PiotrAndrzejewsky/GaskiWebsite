import { Injectable } from '@angular/core';
import {delay, map, of} from "rxjs";
import {Facilitie} from "../models/facilitie.model";

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
                description: 'Plaża w Gąskach to najelpsza plaża pod słońcem, mamy niedzeje że przypadnie Państwu do gustu'
            },
            {
                title: 'Latarnia',
                src: 'assets/images/atrakcje/latarnia.jpg',
                description: "Latarnia w gąskach to jedna z najwyższych latarni nad brzegiem morza. Zapraszamy do wejścią na samą górę! Wejście bezpłatne!"
            },
            {
                title: 'Ognisko',
                src: 'assets/images/atrakcje/ognisko.jpg',
                description: 'Możliwość rozpalenia ogniska na działce. Pomożemy w organizacji!'
            },
            {
                title: 'Plac zabaw dla dzieci',
                src: 'assets/images/atrakcje/plac-zabaw.jpg',
                description: 'Posiadamy mały plac zabaw dla najmłodszych ze zjeżdżalnią i piaskownicą! Idealne dla dzieci. '
            },
            {
                title: 'Taras',
                src: 'assets/images/atrakcje/taras.jpg',
                description: 'Osłonięty taras to idealne miejsce na wieczorny odpoczynek i integracje!'
            },
            {
                title: 'Jacuzzi',
                src: 'assets/images/atrakcje/jacuzzi.jpg',
                description: 'Dla naszych gości mamy przygotowane jacuzzi! Zapraszamy do korzystania!'
            },
            {
                title: 'Deptak',
                src: 'assets/images/atrakcje/gofry.jpg',
                description: 'Miejscowość Gąski słynie ze swojego deptaka. Znajdują się tutaj sklepy z pamiątkami, restauracje, lodziarnie.'
            },

        ];
        return of(array).pipe()
    }

    addNewFacilitie(facilite: Facilitie){
     // push facilite to server
     return of('true');
    }

    deleteFacilite(name: string) {
      return of('true');
    }
}
