export const contents: Record<ContentKey, FacilitieContent>  = {
    beach: {title: 'Plaża', description: 'Plaża w Gąskach to najelpsza plaża pod słońcem, mamy niedzeje że przypadnie Państwu do gustu', src: "../c"},
    pools: {title: 'Baseny', description: 'Wierzymy, że gąskowe baseny będą dla Państwa odetchnieniem od wszelkich obowiązków. Życzymy miłego pluskania', src: "https://picsum.photos/500?seed=52"},
    transport: {title: 'Hulajnogi', description: 'We wszystkie miejsca dojedzecie Państwo hulajnogami, udostępnionymi za darmo w naszej bazie', src: "https://picsum.photos/500?seed=51"},
    aquapark: {title: 'Kompleks basenowy', description: 'Do basenów gąskowych przyjeżdzał Marek Aureliusz. Poczuj się jak to jest kąpać się tam gdzie imperator', src: "https://picsum.photos/500?seed=53"},
    gardens: {title: 'Ogrody', description: 'Widziałeś 1000 gatunków roślin ? nie ? to zobacz gąskowe ogrody!', src: "https://picsum.photos/500?seed=50"}
}

export interface Contents {
    beach: FacilitieContent,
    pools: FacilitieContent,
    transport: FacilitieContent,
    aquapark: FacilitieContent,
    gardens: FacilitieContent
}
export interface EnhancedContents {
    beach: FacilitieContentEnhanced,
    pools: FacilitieContentEnhanced,
    transport: FacilitieContentEnhanced,
    aquapark: FacilitieContentEnhanced,
    gardens: FacilitieContentEnhanced
}

export type ContentKey = 'beach' | 'pools' | 'transport' | 'aquapark' | 'gardens';

export interface FacilitieContent {
    title: string,
    description: string,
    src: string,
}

export interface FacilitieContentEnhanced extends FacilitieContent {
    isVisible: boolean,
    isSelected: boolean
}
