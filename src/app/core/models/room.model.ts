export type Room = {
    title: string,
    shortDescription: string,
    longDescription: string,
    maximumNumberOfPeopleAllowed: number,
    basePricePerNight: number,
    pricePerPerson: number,
    isPlaceReservable: boolean,
    imageLink: string[]
}
export type RoomShortInformation = {

    title: string,
    basePricePerNight: number,
    serviceCost: number
}
