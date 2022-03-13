export class Image {
    public id: string;
    public author: string;
    public width: number;
    public height: number;
    public url: string;
    public download_url: string;

    constructor(id: string, author: string, width: number, height: number, url: string, download_url: string) {
        this.id = id;
        this.author = author;
        this.width = width;
        this.height = height;
        this.url = url;
        this.download_url = download_url;
    }
}

export class Album {
    public id: string;
    public name: string;
    public images: Image[];

    constructor(id: string, name: string, images: Image[]) {
        this.id = id;
        this.name = name;
        this.images = images;
    }
}