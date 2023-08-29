export const contents  = {
    beach: {title: 'Plaża', description: 'Plaża w Gąskach to najelpsza plaża pod słońcem, mamy niedzeje że przypadnie Państwu do gustu', src: "https://picsum.photos/500"},
    pools: {title: 'Baseny', description: 'Wierzymy, że gąskowe baseny będą dla Państwa odetchnieniem od wszelkich obowiązków. Życzymy miłego pluskania', src: "https://picsum.photos/500"},
    transport: {title: 'Hulajnogi', description: 'We wszystkie miejsca dojedzecie Państwo hulajnogami, udostępnionymi za darmo w naszej bazie', src: "https://picsum.photos/500"},
    aquapark: {title: 'Kompleks basenowy', description: 'Do basenów gąskowych przyjeżdzał Marek Aureliusz. Poczuj się jak to jest kąpać się tam gdzie imperator', src: "https://picsum.photos/500"},
    gardens: {title: 'Ogrody', description: 'Widziałeś 1000 gatunków roślin ? nie ? to zobacz gąskowe ogrody!', src: "https://picsum.photos/500"}
}
export type Content = keyof typeof contents;
export interface ModifiedContent {
    title: string;
    link: string;
    isSelected: boolean;
}
// export  interface isVisited {
//     isVisited: boolean
// }
export interface VisitedElements {
    [key: string]: [isVisited: boolean]
}
