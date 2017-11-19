export class MangaList {
    constructor(public mangaId: string, public name: string, public info: string, public cover: string, public genres: string[] = []) {}
}

export class MangaDetail {
    constructor(public name: string, public href: string,
                public author: string[], 
                public artist: string[], 
                public status: string, 
                public yearOfRelease: string,
                public genres: string[], public info: string, 
                public cover: string, 
                public lastUpdate: string, public chapters: Chapter[]){}
}

export class Chapter {
    constructor(public chapterid: string, public name: string) {}
}

export class ChapterDetail {
    constructor(public href: string, public lastUpdate: string, public pages: Page[]) {}
}

export class Page {
    constructor(public pageId: string, public url: string) {}
}