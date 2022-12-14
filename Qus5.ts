//Calculating area of  different shapes
interface Shape
{
shapename:string;
printname:()=>string
}
class Cone implements Shape     
{
    printname: () => "Cone";
    shapename: string;
    radius:number;
    height:number;
    constructor(radius:number,height:number)
    {
        this.radius=radius;
        this.height=height;
    }
    ConeArea=()=>{
      console.log("Area of Cone : "+3.14*this.height*this.radius+"");
    } 
}
let obj=new Cone(100,200);
obj.ConeArea();

class Sphere implements Shape
{
    printname: () => "Sphere";
    shapename: string;
    radius:number;
    constructor(radius:number)
    {
        this.radius=radius;
       
    }
    SphereArea=()=>{
      console.log("Area of Sphere : "+4*3.14*this.radius*this.radius);
    } 
}
let obj1=new Sphere(300);
obj1.SphereArea();

class Rectangle implements Shape
{
    printname: () => "Rectangle";
    shapename: string;
    length:number;
    breadth:number;
    constructor(length:number,breadth:number)
    {
        this.length=length;
        this.breadth=breadth;
       
    }
    RectangleArea=()=>{
      console.log("Area of Rectangle : "+this.length*this.breadth);
    } 
}
let obj2=new Rectangle(100,200);
obj2.RectangleArea();
