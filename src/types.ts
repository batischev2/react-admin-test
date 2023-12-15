export interface AuctionItem {
    number: number,
    name: string,
    receptionDate: string,
    startDate: string,
    status: string
}

type socialName = 'faceBook' | 'instagram' | 'whatsapp'

export type socialType = {
    name: socialName,
    img: string,
    href: string
}
