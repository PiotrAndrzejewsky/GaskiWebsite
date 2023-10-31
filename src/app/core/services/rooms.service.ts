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
                description: 'Przestronny pokój z widokiem na ogród.',
                maximumNumberOfPeopleAllowed: 2,
                basePricePerNight: 190,
                pricePerPerson: 79,
                isPlaceReservable: true,
                imageLink: ['assets/images/pokoje/sloneczny/sloneczny-pokoj.jpg', 'assets/images/pokoje/sloneczny/sloneczcny-pokoj-stol.jpg', 'assets/images/pokoje/sloneczny/salon.jpg', 'assets/images/pokoje/sloneczny/sloneczny-lazienka.jpg', 'assets/images/pokoje/sloneczny/domek_duży.jpg']
            },
            {
                title: 'Domek',
                description: 'Domek wolnostojący z salonem, kuchnią, pokojem i sypialnią.',
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
            description: 'Domek wolnostojący z salonem, kuchnią, pokojem i sypialnią.',
            maximumNumberOfPeopleAllowed: 1,
            basePricePerNight: 299,
            pricePerPerson: 119,
            isPlaceReservable: true,
            imageLink: ['assets/images/pokoje/domek/domek-front.jpg','assets/images/pokoje/domek/domek-sypialnia.jpg', 'assets/images/pokoje/domek/domek-pokoje.jpg', 'assets/images/pokoje/domek/domek-salon.jpg','assets/images/pokoje/domek/domek-pokoj-dzieciecy.jpg', 'assets/images/pokoje/domek/domek-lazienka.jpg', 'assets/images/pokoje/domek/domek-kuchnia.jpg', 'assets/images/pokoje/domek/domek-bok.jpg']
        }).pipe()
    }
}
