export interface project {
    title: string,
    location: string,
    time: string,
    content: string[]
}

export interface music {
    title: string,
    artist: string,
    comment?: string,
    yturl: string
}

export interface scrap {
    title: string,
    dateAdded: string,
    text: string[],
    image?: string,
    yturl?: string,
}