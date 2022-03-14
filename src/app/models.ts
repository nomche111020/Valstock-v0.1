export class User {
    public id: string;
    public name: string;
    public surname: string;
    public username: string;
    public password: string;

    constructor(id: string, name: string, surname: string, username: string, password: string){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
    }
}

export class Image {
    public id: string;
    public author: string;
    public width: number;
    public height: number;
    public url: string;
    public download_url: string;
    public thumbnail_url? :string;

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
    public date: Date;

    constructor(id: string, name: string, images: Image[], date: Date) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.date = date;
    }
}