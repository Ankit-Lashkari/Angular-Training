//returns true if string is pallindrome and false if not
var a = "heeh";
var b = "demo";
var func = function (str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};
console.log(func(a));
console.log(func(b));
