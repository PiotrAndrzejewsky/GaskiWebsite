import {Injectable} from '@angular/core';
import {Room} from '../models/room.model';
import {delay, Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    constructor() {}

    getAvailableRooms(): Observable<Room[]> {
        let rooms: Room[] = [
            {
                title: 'Pokój słoneczny',
                shortDescription: 'Przestronny pokój z widokiem na ogród.',
                longDescription: '\n' +
                    '"Przestronny pokój z widokiem na ogród" to idealne połączenie funkcjonalności i estetyki. Wnętrze wyróżnia się przestronnością oraz harmonijnym połączeniem naturalnych elementów z nowoczesnym designem. Panoramiczne okna otwierają się na malowniczy ogród, wprowadzając do pokoju światło i spokój natury.\n' +
                    '\n' +
                    'Meble są starannie dobrane, zapewniając równowagę między komfortem a elegancją. Miękkie, pastelowe tkaniny tworzą przytulną atmosferę, a wyselekcjonowane dodatki nadają wnętrzu wyjątkowy charakter. Dominujące kolory, delikatne odcienie zieleni i beżu, doskonale współgrają z naturalnymi elementami wystroju, takimi jak drewno czy kamień.',
                maximumNumberOfPeopleAllowed: 2,
                basePricePerNight: 190,
                pricePerPerson: 79,
                isPlaceReservable: true,
                imageLink: ['assets/images/pokoje/sloneczny/sloneczny-pokoj.jpg', 'assets/images/pokoje/sloneczny/sloneczcny-pokoj-stol.jpg', 'assets/images/pokoje/sloneczny/salon.jpg', 'assets/images/pokoje/sloneczny/sloneczny-lazienka.jpg', 'assets/images/pokoje/sloneczny/domek_duży.jpg']
            },
            {
                title: 'Domek',
                shortDescription: 'Domek wolnostojący z salonem, kuchnią, pokojem i sypialnią.',
                longDescription: '\n' +
                    '"Przestronny pokój z widokiem na ogród" to idealne połączenie funkcjonalności i estetyki. Wnętrze wyróżnia się przestronnością oraz harmonijnym połączeniem naturalnych elementów z nowoczesnym designem. Panoramiczne okna otwierają się na malowniczy ogród, wprowadzając do pokoju światło i spokój natury.\n' +
                    '\n' +
                    'Meble są starannie dobrane, zapewniając równowagę między komfortem a elegancją. Miękkie, pastelowe tkaniny tworzą przytulną atmosferę, a wyselekcjonowane dodatki nadają wnętrzu wyjątkowy charakter. Dominujące kolory, delikatne odcienie zieleni i beżu, doskonale współgrają z naturalnymi elementami wystroju, takimi jak drewno czy kamień.',

                maximumNumberOfPeopleAllowed: 1,
                basePricePerNight: 299,
                pricePerPerson: 119,
                isPlaceReservable: true,
                imageLink: ['assets/images/pokoje/domek/domek-front.jpg','assets/images/pokoje/domek/domek-sypialnia.jpg', 'assets/images/pokoje/domek/domek-pokoje.jpg', 'assets/images/pokoje/domek/domek-salon.jpg','assets/images/pokoje/domek/domek-pokoj-dzieciecy.jpg', 'assets/images/pokoje/domek/domek-lazienka.jpg', 'assets/images/pokoje/domek/domek-kuchnia.jpg', 'assets/images/pokoje/domek/domek-bok.jpg']
            }
        ]
        return of(rooms);
    }

    getRoomByName(roomName: string): Observable<Room> {
        return of({
            title: 'Domek',
            shortDescription: 'Domek wolnostojący z salonem, kuchnią, pokojem i sypialnią.',
            longDescription: '\n' +
                '"Przestronny pokój z widokiem na ogród" to idealne połączenie funkcjonalności i estetyki. Wnętrze wyróżnia się przestronnością oraz harmonijnym połączeniem naturalnych elementów z nowoczesnym designem. Panoramiczne okna otwierają się na malowniczy ogród, wprowadzając do pokoju światło i spokój natury.\n' +
                '\n' +
                'Meble są starannie dobrane, zapewniając równowagę między komfortem a elegancją. Miękkie, pastelowe tkaniny tworzą przytulną atmosferę, a wyselekcjonowane dodatki nadają wnętrzu wyjątkowy charakter. Dominujące kolory, delikatne odcienie zieleni i beżu, doskonale współgrają z naturalnymi elementami wystroju, takimi jak drewno czy kamień.',

            maximumNumberOfPeopleAllowed: 1,
            basePricePerNight: 299,
            pricePerPerson: 119,
            isPlaceReservable: true,
            imageLink: ['assets/images/pokoje/domek/domek-front.jpg','assets/images/pokoje/domek/domek-sypialnia.jpg', 'assets/images/pokoje/domek/domek-pokoje.jpg', 'assets/images/pokoje/domek/domek-salon.jpg','assets/images/pokoje/domek/domek-pokoj-dzieciecy.jpg', 'assets/images/pokoje/domek/domek-lazienka.jpg', 'assets/images/pokoje/domek/domek-kuchnia.jpg', 'assets/images/pokoje/domek/domek-bok.jpg']
        }).pipe()
    }
}
