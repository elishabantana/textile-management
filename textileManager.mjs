import Textile from "./textile.mjs";
class TextileManager{
    constructor(){
        this.textileObjectSet=new Set();
        this.myTextile=new Textile("sugar", 2000);

    }
    addTextile(myNewName, myNewPrice){
        this.textileObjectSet.add(new Textile(this.myTextile.setName=myNewName,this.myTextile.setPrice=myNewPrice));
    return this.textileObjectSet;
    }
    displayTextiles(){

        for(let textileProduct of this.textileObjectSet.values()){
            console.log(`${textileProduct.name}: ${textileProduct.price}`);
        }
    }
    updateTextilePrice(findName, newPrice){
        for(let textileProduct of this.textileObjectSet.values()){
            if (textileProduct.name===findName){
                textileProduct.price=newPrice;
            }
           
        }
        return this.textileObjectSet;

    }
    deleteTextile(locateName){

        for(let textileProduct of this.textileObjectSet.values()){
           if(textileProduct.name ===locateName){
            this.textileObjectSet.delete(textileProduct);
           }
           
        }
        return this.textileObjectSet;

    }
        

}



function mainFunction(){

let myTextile=new TextileManager();
myTextile.addTextile("cotton",1500); //add cotton
myTextile.addTextile("wool",1000); //add wool
myTextile.addTextile("silk",4000); //add silk
myTextile.updateTextilePrice("wool",7000); //update wool
myTextile.deleteTextile("silk");  //delete silk
 myTextile.displayTextiles();  //display products in the set

}

mainFunction();