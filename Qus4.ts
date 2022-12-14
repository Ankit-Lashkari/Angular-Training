
class Item{
     itemId:number;
     itemName:string; 
     itemPrice:number;
     category:string;
     constructor(itemid:number,itemname:string,itemprice:number,Category:string)
     {
     this.itemId=itemid;
     this.itemName=itemname;
     this.itemPrice=itemprice;
     this.category=Category;
     }
}
let item1=new Item(1,"Ram",2000,"Computer Hardware");
let item2=new Item(2,"SSD",3000,"Computer Hardware");
let call=(obj:Item)=>{
    console.log(obj);
}
call(item1);
call(item2);