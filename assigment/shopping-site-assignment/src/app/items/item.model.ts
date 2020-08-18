export class Item {
    public name: string;
    public description: string;
    public price: number;
    public firstImagePath: string;
    public category: string;

    constructor(name: string, desc: string, price: number, firstImagePath: string, category: string){
        this.name = name;
        this.description = desc;
        this.price = price;
        this.firstImagePath = firstImagePath;
        this.category = category;
    }
}