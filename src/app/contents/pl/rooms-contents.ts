export const rooms: Room = new Map<string, RoomDetails>([
    ['sloneczny', {
        description: 'Przestronny pokój z widokiem na ogród.',
        maximumNumberOfPeopleAllowed: 2,
        basePricePerNight: 150,
        pricePerPerson: 30,
        isPlaceReservable: true,
        imageLink: ['https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000']
    }],
    ['gwiezdny', {
        description: 'Mały, ale przytulny pokój z tematyczną dekoracją kosmiczną.',
        maximumNumberOfPeopleAllowed: 1,
        basePricePerNight: 100,
        pricePerPerson: 0,
        isPlaceReservable: true,
        imageLink: ['https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000']
    }],
    ['zielony', {
        description: 'Pokój zielony, ozdobiony roślinami i naturalnymi materiałami.',
        maximumNumberOfPeopleAllowed: 3,
        basePricePerNight: 180,
        pricePerPerson: 40,
        isPlaceReservable: true,
        imageLink: ['https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000']
    }],
    ['romantyczny', {
        description: 'Nastrojowy pokój dla zakochanych, z własnym kominkiem.',
        maximumNumberOfPeopleAllowed: 2,
        basePricePerNight: 200,
        pricePerPerson: 50,
        isPlaceReservable: true,
        imageLink: ['https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000', 'https://picsum.photos/1000']
    }]
]);

export type Room = Map<string, RoomDetails>


export type RoomDetails = {
    description: string,
    maximumNumberOfPeopleAllowed: number,
    basePricePerNight: number,
    pricePerPerson: number,
    isPlaceReservable: boolean,
    imageLink: string[]
}
