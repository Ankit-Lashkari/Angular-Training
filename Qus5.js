var Cone = /** @class */ (function () {
    function Cone(radius, height) {
        var _this = this;
        this.ConeArea = function () {
            console.log("Area of Cone : " + 3.14 * _this.height * _this.radius + "");
        };
        this.radius = radius;
        this.height = height;
    }
    return Cone;
}());
var obj = new Cone(100, 200);
obj.ConeArea();
var Sphere = /** @class */ (function () {
    function Sphere(radius) {
        var _this = this;
        this.SphereArea = function () {
            console.log("Area of Sphere : " + 4 * 3.14 * _this.radius * _this.radius);
        };
        this.radius = radius;
    }
    return Sphere;
}());
var obj1 = new Sphere(300);
obj1.SphereArea();
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        var _this = this;
        this.RectangleArea = function () {
            console.log("Area of Rectangle : " + _this.length * _this.breadth);
        };
        this.length = length;
        this.breadth = breadth;
    }
    return Rectangle;
}());
var obj2 = new Rectangle(100, 200);
obj2.RectangleArea();
