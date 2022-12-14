var MyClass = /** @class */ (function () {
    function MyClass() {
        var _this = this;
        this.setvalue = function (value) {
            _this.value = value;
            return _this.value;
        };
        this.isVowel = function (str) {
            if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u' || str[0] == 'A' || str[0] == 'E' || str[0] == 'I' || str[0] == 'O' || str[0] == 'U') {
                return true;
            }
            return false;
        };
        this.countLetters = function (str) {
            if (_this.isVowel(str)) {
                var count = 0;
                for (var i = 1; i < str.length; i++) {
                    if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' && str[i] != 'A' && str[i] != 'E' && str[i] != 'I' && str[i] != 'O' && str[i] != 'U') {
                        count++;
                    }
                }
                return count;
            }
            else {
                var count = 0;
                for (var i = 1; i < str.length; i++) {
                    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
                        count++;
                    }
                }
                return count;
            }
        };
    }
    return MyClass;
}());
var o = new MyClass();
console.log("Number of vowels:" + o.countLetters(o.setvalue("hello")));
console.log("Number of consonants:" + o.countLetters(o.setvalue("Ankit")));
