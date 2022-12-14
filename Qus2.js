var arr = [4, 8, 12, 2, 98];
var sort = function (arr) {
    var result = arr.sort(function (a, b) { return a - b; });
    console.log(result);
};
sort(arr);
