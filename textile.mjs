export default class Textile{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }

    get getName(){
        return this.name;
    }
    get getPrice(){
        return this.price;
    }
    set setName(newName){
        this.name=newName;
    }
    set setPrice(newPrice){
        this.price=newPrice;
    }
    toString(){
        return `${this.getName} ${this.getPrice}`;
    }
 }

