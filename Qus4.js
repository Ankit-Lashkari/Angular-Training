var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, Category) {
        this.itemId = itemid;
        this.itemName = itemname;
        this.itemPrice = itemprice;
        this.category = Category;
    }
    return Item;
}());
var item1 = new Item(1, "Ram", 2000, "Computer Hardware");
var item2 = new Item(2, "SSD", 3000, "Computer Hardware");
var call = function (obj) {
    console.log(obj);
};
call(item1);
call(item2);
