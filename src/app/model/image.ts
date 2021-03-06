export class Image {
    private idUser: number;
    constructor(private id: number,
                private position: number,
                private url: string){ }

    getId(){
        return this.id;
    }

    setId(id: number){
        this.id = id;
    }

    getPosition(){
        return this.position;
    }

    setPosition(position: number){
        this.position = position;
    }

    getUrl(){
        return this.url;
    }

    setUrl(url: string){
        this.url = url;
    }

    getIdUser(){
        return this.idUser;
    }

    setIdUser(IdUser: number){
        this.idUser =IdUser;
    }
}
