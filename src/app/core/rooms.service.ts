import {Injectable} from '@angular/core';
import {Room} from './room.model';
import {delay, Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    constructor() {
    }

    getAvailableRooms(): Observable<Room[]> {
        let rooms: Room[] = [
            {
                title: 'słoneczny',
                description: 'Przestronny pokój z widokiem na ogród.',
                maximumNumberOfPeopleAllowed: 2,
                basePricePerNight: 150,
                pricePerPerson: 30,
                isPlaceReservable: true,
                imageLink: ['https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000']
            },
            {
                title: 'Gwiezdny',
                description: 'Mały, ale przytulny pokój z tematyczną dekoracją kosmiczną.',
                maximumNumberOfPeopleAllowed: 1,
                basePricePerNight: 100,
                pricePerPerson: 0,
                isPlaceReservable: true,
                imageLink: ['https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000']
            }
        ]
        return of(rooms).pipe(
            delay(500)
        );
    }

    getRoomByName(roomName: string): Observable<Room> {
        return of({
            title: 'Gwiezdny',
            description: 'Mały, ale przytulny pokój z tematyczną dekoracją kosmiczną.',
            maximumNumberOfPeopleAllowed: 1,
            basePricePerNight: 100,
            pricePerPerson: 0,
            isPlaceReservable: true,
            imageLink: ['https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000']
        }).pipe(
            delay(500)
        )
    }
}
